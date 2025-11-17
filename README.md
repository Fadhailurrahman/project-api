# Telco API

Telco API adalah backend sederhana berbasis **Node.js + Express** yang berfungsi sebagai penyedia data untuk aplikasi **Telco Dashboard**.  
API ini memuat data pelanggan dari file CSV, menyediakan analisis dasar, serta rekomendasi sederhana.

Struktur dan endpoint API dibuat ringan agar mudah digunakan oleh frontend (React, Vite, Next, atau framework lainnya).

---

## Struktur Proyek

```
PROJECT-API/
├── controllers/
│   ├── analyticsController.js
│   ├── customerController.js
│   └── recommendController.js
├── data/
│   ├── customersData.js
│   └── telco.csv
├── routes/
│   ├── analytics.js
│   ├── customers.js
│   └── recommend.js
├── index.js
├── package.json
└── vercel.json
```

---

## Fitur Utama API

### ✔ Load data dari CSV (telco.csv)  
Data pelanggan dimuat otomatis saat server dijalankan.

### ✔ Endpoint Customers  
- Ambil semua data pelanggan  
- Ambil data berdasarkan **customer_id**

### ✔ Endpoint Analytics  
- Total pelanggan  
- Total pelanggan churn / non-churn  
- Average tenure  
- Pembagian gender  
- Statistik lain (bisa ditambah)

### ✔ Endpoint Rekomendasi  
- Rekomendasi penawaran berdasarkan:  
  - Tenure pelanggan  
  - Payment method  
  - Contract type  

---

# 📡 Dokumentasi Endpoint

## 1 **GET /api/customers**
Mengambil seluruh data pelanggan.

**Response:**
```json
{
  "status": "success",
  "count": 7032,
  "data": [ ... ]
}
```

---

## 2 **GET /api/customers/:id**
Mengambil data 1 pelanggan berdasarkan `customer_id`.

**Contoh:**
```
GET /api/customers/7590-VHVEG
```

---

## 3 **GET /api/analytics/summary**
Analisis ringkas data pelanggan.

**Contoh Response:**
```json
{
  "totalCustomers": 7032,
  "churnRate": "26.5%",
  "averageTenure": 32.7,
  "genderDistribution": {
    "Male": 3555,
    "Female": 3477
  }
}
```

---

## 4 **GET /api/recommend/:id**
Memberikan rekomendasi paket/promo untuk pelanggan tertentu.

**Response contoh:**
```json
{
  "customer_id": "7590-VHVEG",
  "recommendation": "Upgrade ke Contract Two Year untuk diskon 30%"
}
```

---

# Menjalankan API Secara Lokal

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan server
```bash
npm start
```

Server berjalan di:
```
http://localhost:3000
```

---

# Struktur Respons API (Ringkas)

| Endpoint | Deskripsi |
|---------|-----------|
| GET /api/customers | Semua pelanggan |
| GET /api/customers/:id | Berdasarkan ID |
| GET /api/analytics/summary | Statistik utama |
| GET /api/recommend/:id | Rekomendasi |

---

# Teknologi yang Digunakan
- Node.js
- Express.js
- csv-parser
- CORS
- Vercel Serverless (opsional)

---

# Author
**Moh. Fadhailurrahman**  
Telco Dashboard Project – 2025

