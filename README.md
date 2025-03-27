# Auto Claim Daily Reward Billions Network 

Script ini digunakan untuk mengotomatisasi klaim daily reward pada platform Billions Network menggunakan beberapa wallet sekaligus.

## ✨ Fitur
- 🚀 **Multi-wallet support** – Mendukung banyak wallet secara bersamaan.
- ⏳ **Hitung mundur real-time** – Menampilkan waktu klaim berikutnya dalam format `HH:MM:SS`.
- 🤖 **Otomatis klaim** – Melakukan klaim daily reward secara otomatis saat waktunya tiba..

## 📜 Cara Penggunaan

### 1. Clone Repository
```sh
git clone https://github.com/mhdverel/BillionsNetwork-Daily
cd BillionsNetwork-Daily
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Tambahkan Token Sesi
Buat file `token.txt` di root folder dan tambahkan token sesi Anda, satu token per baris:
```
session_id=your_token_here
session_id=another_token_here
```

### 4. Jalankan Script
```sh
node index
```

## ⚠️ Catatan
- Pastikan token dalam `token.txt` masih valid.
- Script ini menggunakan API Billions Network yang dapat berubah sewaktu-waktu.
- Disarankan menjalankan script ini di **VPS** agar tetap berjalan 24/7.

## 📌 Lisensi
Proyek ini dibuat untuk tujuan edukasi dan tidak bertanggung jawab atas penyalahgunaan. Gunakan dengan bijak! 🚀

