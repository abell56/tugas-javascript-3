/**
 * Tugas Pertemuan 3 JS
 * Sistem Manajemen Toko Online - Manajemen Produk
 */

// 1. Array produkToko yang menyimpan daftar produk
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

/**
 * 2. Fungsi tambahProduk(nama, harga, stok)
 * Menambahkan produk baru ke dalam array produkToko
 * ID dibuat secara otomatis berdasarkan ID tertinggi + 1
 */
function tambahProduk(nama, harga, stok) {
  // Menentukan ID baru agar selalu unik
  const idBaru = produkToko.length > 0 
    ? Math.max(...produkToko.map(p => p.id)) + 1 
    : 1;

  const produkBaru = {
    id: idBaru,
    nama: nama,
    harga: Number(harga),
    stok: Number(stok)
  };

  produkToko.push(produkBaru);
  console.log(`[BERHASIL] Produk "${nama}" berhasil ditambahkan dengan ID ${idBaru}.`);
  return produkBaru;
}

/**
 * 3. Fungsi hapusProduk(id)
 * Menghapus produk dari array berdasarkan ID
 */
function hapusProduk(id) {
  const index = produkToko.findIndex(produk => produk.id === id);

  if (index !== -1) {
    const produkDihapus = produkToko.splice(index, 1)[0];
    console.log(`[BERHASIL] Produk "${produkDihapus.nama}" (ID: ${id}) berhasil dihapus.`);
    return produkDihapus;
  } else {
    console.log(`[GAGAL] Produk dengan ID ${id} tidak ditemukan.`);
    return null;
  }
}

/**
 * 4. Fungsi tampilkanProduk()
 * Menampilkan seluruh daftar produk toko yang tersedia
 */
function tampilkanProduk() {
  console.log("\n==================== DAFTAR PRODUK TOKO ====================");
  
  if (produkToko.length === 0) {
    console.log("Belum ada produk yang tersedia di toko.");
  } else {
    produkToko.forEach((produk, index) => {
      const formatHarga = `Rp ${produk.harga.toLocaleString("id-ID")}`;
      console.log(
        `${index + 1}. [ID: ${produk.id}] ${produk.nama} | Harga: ${formatHarga} | Stok: ${produk.stok}`
      );
    });
  }
  
  console.log("============================================================\n");
}

// ==========================================
// PENGUJIAN / DEMONSTRASI PENGGUNAAN FUNGSI
// ==========================================

console.log("=== 1. MENAMPILKAN DAFTAR PRODUK AWAL ===");
tampilkanProduk();

console.log("=== 2. MENAMBAHKAN PRODUK BARU ===");
tambahProduk("Monitor 24 Inch", 1800000, 4);
tambahProduk("Headset Gaming", 450000, 8);

console.log("\n=== 3. MENAMPILKAN PRODUK SETELAH PENAMBAHAN ===");
tampilkanProduk();

console.log("=== 4. MENGHAPUS PRODUK (Contoh ID: 2 - Mouse) ===");
hapusProduk(2);

console.log("\n=== 5. MENAMPILKAN PRODUK SETELAH PENGHAPUSAN ===");
tampilkanProduk();

console.log("=== 6. MENCOBA HAPUS PRODUK DENGAN ID YANG TIDAK ADA ===");
hapusProduk(99);
