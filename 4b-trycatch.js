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