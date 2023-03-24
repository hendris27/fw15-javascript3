console.log("contoh penggunaan try catch \n")

function checknumber() {
    return new Promise((resolve, reject) => {
        // do some asynchronous task
        const number = 2
        if (number < 5) {
            resolve(number);
        } else {
            reject(new Error('angka harus kurang dari 5'));
        }
    });
}

async function messegeError() {
    try {
        const result = await checknumber();
        console.log('The result is:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

messegeError();
console.log("contoh penggunaan then catch \n")


function getData() {
    return new Promise(function (resolve, reject) {
        // lakukan pengambilan data
        var data = [1, 2];

        if (data.length > 1) {
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