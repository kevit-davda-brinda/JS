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

var counter = 0;

job1(function() {
    

    counter += 1;

    if (counter == 2) {
        done();
    }
});

job2(function() {


    counter += 1;

    if (counter == 2) {
        done();
    }
});

function done() {
    console.log('done');
}