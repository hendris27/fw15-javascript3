// Perbedaan Asyncronus dan Synchoronus



 // Asynchronoush adalah cara kerja sebuah program yang akan diekssuksi / tulis tidak dieksekusi secara langsung /tidak sesuai urutan. 
 // Dimana program tidak menunggu hasil dari operasi sebelumnya untuk mengeksekusi program selanjutnya. 
 // contohnya menunggu API saat mengambil data, timer, listener dll


//  Synchronous  adalah cara kerja di mana kode yang di tulis dieksekusi satu persatu sesuai urutan code yang dituliskan
//  dimana program menunggu hasil dari kode  sebelumnya sebelum mengeksekusi kode selanjutnya. 
//  dan program selanjutnya akan diproses setelah program pertama selesai
// contohny program looping, 
 


// contoh Asynchronous
console.log('Start');

setTimeout(() => {
  console.log('Asynchronous');
}, 2000);

console.log('End');

//// contoh Synchronous
console.log("\n")
console.log('Start');

function sync() {
  console.log('Synchronous');
}

sync();

console.log('End');

