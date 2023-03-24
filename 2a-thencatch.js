const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const dataDay = ['senin', 'selasa', 'rabu', 'kamis', "jum'at", ]
                let cek = dataDay.find((item) => {
                    return item === day
                })
                if (cek) {
                    resolve(cek)
                } else {
                    reject(new Error('Hari ini bukan hari kerja'))
                }
            },
            3000)
    })
}


cekHariKerja('sabtu')
    .then(function (result) {
        console.log("Data berhasil ditemukan:", result);
    })
    .catch(function (error) {
        console.log("Error:", error.message);
    });