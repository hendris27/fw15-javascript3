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
async function messegeError() {
    try {
        const day = await cekHariKerja('senin');
        console.log(day, 'adalah hari kerja');
    } catch (error) {
        console.error('Error:', error.message);
    }
}
messegeError()