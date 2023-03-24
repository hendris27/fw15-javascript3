console.log("contoh penggunaan then catch \n")


function getData() {
    return new Promise(function (resolve, reject) {
        // lakukan pengambilan data
        var data = [1, 2];

        if (data.length > 3) {
            resolve(data);
        } else {
            reject("Data tidak ditemukan");
        }
    });
}

// Panggil Promise dan tangani hasilnya dengan then dan catch
getData()
    .then(function (result) {
        console.log("Data berhasil ditemukan:", result);
    })
    .catch(function (error) {
        console.log("Terjadi kesalahan:", error);
    });