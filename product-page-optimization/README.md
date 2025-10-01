# Product Page Optimization

## Description (English)
This project is a Next.js application for displaying product details with optimized UI and performance.

### Features
- Display product list and details
- Product image carousel
- Stock indicator
- Back navigation with arrow icon

### How to Run

#### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd product-page-optimization
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Start Development Server
```bash
npm run dev
```

Access the app at [http://localhost:3000](http://localhost:3000).

#### 4. Important Folder Structure
- `src/app/products/[id]/page.tsx` — Product detail page
- `src/app/utils/api.ts` — Product data fetching function

### Notes
- Ensure the `/api/products` endpoint is available and responsive.
- For optimal performance, use pagination and caching in the API.

### Troubleshooting
If the API is slow, check:
- Database connection
- Query and indexing
- Cache implementation

---

## Deskripsi (Bahasa Indonesia)
Project ini adalah aplikasi Next.js untuk menampilkan detail produk dengan tampilan dan performa yang dioptimalkan.

### Fitur
- Menampilkan daftar dan detail produk
- Carousel gambar produk
- Indikator stok produk
- Navigasi kembali dengan ikon panah

### Cara Menjalankan

#### 1. Clone Repository
```bash
git clone <url-repo-anda>
cd product-page-optimization
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Jalankan Development Server
```bash
npm run dev
```

Akses aplikasi di [http://localhost:3000](http://localhost:3000).

#### 4. Struktur Folder Penting
- `src/app/products/[id]/page.tsx` — Halaman detail produk
- `src/app/utils/api.ts` — Fungsi fetch data produk

### Catatan
- Pastikan endpoint `/api/products` tersedia dan responsif.
- Untuk performa optimal, gunakan pagination dan caching pada API.

### Troubleshooting
Jika API lambat, cek:
- Koneksi database
- Query dan indexing
- Implementasi cache

---

**Happy coding! / Selamat berkarya!**