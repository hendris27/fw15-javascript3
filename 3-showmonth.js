// fungsi untuk mengubah nomor bulan menjadi nama bulan
function getMonthName(month, callback) {
    const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const monthIndex = parseInt(month) - 1;
    const monthName = monthNames[monthIndex];
    callback(monthName);
}

// array yang berisi nomor bulan
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

// menggunakan fungsi map untuk mengubah array bulan menjadi array nama bulan
const monthNames = months.map(function (month) {
    return new Promise(function (resolve, reject) {
        getMonthName(month, function (monthName) {
            resolve(monthName);
        });
    });
});

// menunggu semua promise selesai dan mencetak nama bulan
Promise.all(monthNames).then(function (result) {
    console.log(result);
});