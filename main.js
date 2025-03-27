const fs = require("fs");
const axios = require("axios");
const moment = require("moment-timezone");
const figlet = require("figlet");
const path = require("path");

const tokenPath = path.join(__dirname, "token.txt");

function readSessionTokens() {
    try {
        const data = fs.readFileSync(tokenPath, "utf8").trim().split("\n");
        return data.map(line => line.split("=")[1].trim()).filter(Boolean);
    } catch (err) {
        console.error("❌ Gagal membaca file token.txt:", err.message);
        return [];
    }
}

const SESSION_IDS = readSessionTokens();
if (SESSION_IDS.length === 0) {
    console.log("⚠️ Tidak ada token ditemukan, pastikan token.txt sudah benar.");
    process.exit(1);
}

const headers = sessionId => ({
    "accept": "application/json, text/plain, */*",
    "cookie": `session_id=${sessionId}`,
    "origin": "https://signup.billions.network",
    "referer": "https://signup.billions.network/",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
});

function showBanner() {
    console.log("\n" + figlet.textSync("PEYENG", { font: "Big" }));
    console.log("🔥 Auto Claim Daily Reward Billions Network 🔥\n");
}

function formatWaktu(utcTime) {
    return moment(utcTime).tz("Asia/Jakarta").format("dddd, DD MMMM YYYY, HH:mm:ss [WIB]");
}

function formatSisaWaktu(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let jam = Math.floor(totalSeconds / 3600);
    let menit = Math.floor((totalSeconds % 3600) / 60);
    let detik = totalSeconds % 60;
    return `${String(jam).padStart(2, '0')}:${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;
}

async function getUserStatus(sessionId) {
    try {
        const response = await axios.get("https://signup-backend.billions.network/me", { headers: headers(sessionId) });
        const data = response.data;

        console.log(`👤 Wallet: ${data.name} | ID: ${data.id}`);
        console.log(`🔄 Next Daily Reward At: ${formatWaktu(data.nextDailyRewardAt)}`);
        
        return data.nextDailyRewardAt;
    } catch (error) {
        console.error("❌ Gagal mendapatkan status user:", error.response?.data || error.message);
        return null;
    }
}

async function claimDailyReward(sessionId) {
    try {
        const response = await axios.post("https://signup-backend.billions.network/claim-daily-reward", {}, { headers: headers(sessionId) });

        if (response.status === 200) {
            console.log(`✅ Berhasil klaim daily reward pada ${moment().tz("Asia/Jakarta").format("dddd, DD MMMM YYYY, HH:mm:ss [WIB]")}`);
        } else {
            console.log("⚠️ Gagal klaim daily reward:", response.data);
        }
    } catch (error) {
        console.error("❌ Gagal klaim daily reward:", error.response?.data || error.message);
    }
}

async function countdownAndClaim(sessionId, nextClaimTime) {
    let nextClaimTimestamp = moment(nextClaimTime).tz("Asia/Jakarta").valueOf();
    console.log(`⏳ Menunggu klaim untuk wallet ${sessionId.slice(0, 6)}...`);

    const interval = setInterval(() => {
        let nowTimestamp = moment().tz("Asia/Jakarta").valueOf();
        let timeUntilClaim = nextClaimTimestamp - nowTimestamp;

        if (timeUntilClaim <= 0) {
            clearInterval(interval);
            console.log("\n🚀 Waktunya klaim! Mengirim permintaan...");
            claimDailyReward(sessionId).then(() => {
                console.log("\n🔄 Menunggu daily reward berikutnya...\n");
                waitUntilNextClaim(sessionId);
            });
            return;
        }

        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(`⏳ ${formatSisaWaktu(timeUntilClaim)} lagi untuk klaim wallet ${sessionId.slice(0, 6)}`);
    }, 1000); // Update setiap detik
}

async function waitUntilNextClaim(sessionId) {
    const nextRewardTime = await getUserStatus(sessionId);
    if (!nextRewardTime) return;
    countdownAndClaim(sessionId, nextRewardTime);
}

async function main() {
    showBanner();
    for (const sessionId of SESSION_IDS) {
        waitUntilNextClaim(sessionId);
    }
}

main();
