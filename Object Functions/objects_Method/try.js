function job1(callback) {
    setTimeout(function() {
        callback('test 1');
    }, 2000);
}

function job2(callback) {
    setTimeout(function() {
        callback('test 2');
    }, 4000);
}

job1(function(data) {
    console.log(data);

    job2(function(data) {
        console.log(data);
    });
});


function job(data) {
    return new Promise((resolve, reject) => {
        // console.log(isNaN(data));
        if (isNaN(data)) {
            reject("error");
        }
        else {
            setTimeout(() => {
                if (data % 2 === 0) {
                    resolve("even")
                }
                resolve("odd")
            }, 2000);
        }


    });
}

module.exports = job()

let prom = job(4);

prom
.catch(function(){console.log("res1")})
.then(function(){console.log("res")});