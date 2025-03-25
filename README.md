# NT - Exhaust Daily Reward Automation

🔥 Automasi Daily Reward by NT - Exhaust 🔥

## 📌 Deskripsi
Skrip ini berfungsi untuk mengotomatisasi klaim daily reward di platform **Billions Network** menggunakan Node.js. Skrip akan menampilkan informasi akun, menghitung waktu mundur hingga daily reward berikutnya tersedia, lalu secara otomatis mengklaimnya dan mengulangi proses setiap hari.

## 🚀 Fitur
- Menampilkan informasi akun seperti nama, email, ID, rank, referral code, power, dan level.
- Menampilkan waktu klaim berikutnya dalam format yang lebih rapi.
- Menghitung mundur hingga waktu klaim berikutnya.
- Mengklaim daily reward secara otomatis.
- Loop otomatis setiap 24 jam.

---

## 🔧 Instalasi & Penggunaan

### 1️⃣ **Clone Repository (Jika Perlu)**
```sh
 git clone https://github.com/isansut/BillionsNetwork-daily.git
 cd BillionsNetwork-daily
```

### 2️⃣ **Install Dependencies**
Pastikan kamu telah menginstall Node.js di sistemmu, lalu jalankan perintah berikut untuk menginstall dependencies yang dibutuhkan:
```sh
npm i
```

### 3️⃣ **Konfigurasi Session Token**
Buat file `token.txt` dan masukkan session ID yang diperoleh dari website **Billions Network**.

Contoh isi file `token.txt`:
```
session_id=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJCaWxsaW9ucy5OZ...
```

### 4️⃣ **Menjalankan Skrip**
Untuk menjalankan bot, gunakan perintah berikut:
```sh
npm start
```
Atau secara langsung dengan:
```sh
node daily.js
```

---

## 📜 Dependensi
Skrip ini menggunakan beberapa package berikut:
- `axios` → Untuk melakukan request API ke server Billions Network.
- `moment-timezone` → Untuk mengatur format waktu berdasarkan zona waktu Indonesia.
- `figlet` → Untuk menampilkan banner di terminal.

Semua dependensi bisa diinstall menggunakan:
```sh
npm i axios moment-timezone figlet
```

---

## 🛠 Troubleshooting
**Jika `npm start` tidak berfungsi:**
1. Pastikan `daily.js` ada dalam direktori yang sama dengan `package.json`.
2. Cek apakah `scripts` dalam `package.json` sudah benar:
   ```json
   "scripts": {
     "start": "node daily.js"
   }
   ```
3. Pastikan semua dependencies telah terinstall dengan `npm i`.
4. Jika masih error, coba jalankan langsung dengan `node daily.js` untuk melihat errornya.

---

## 📌 Lisensi
Proyek ini dibuat oleh **NT - Exhaust** dan bebas digunakan untuk keperluan pribadi.

🚀 Selamat menggunakan bot automation ini! Jangan lupa untuk berbagi jika bermanfaat. 😊

