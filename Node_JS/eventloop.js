function loop() {
    setTimeout(loop, 0);
    console.log("loop")
}

console.log("outof loop")

// loop();

// timeout_vs_immediate.js
setTimeout(() => {
    console.log('timeout');
}, 3.0);

setImmediate(() => {
    console.log('immediate');
});

// timeout_vs_immediate.js
const fs = require('fs');


fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('immediate');
    });
});


let bar;

function someAsyncApiCall(callback) {
  process.nextTick(callback);
}

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

bar = 1;

const net = require('net');

// const server = net.createServer();
// server.on('connection', (conn) => {});

// server.listen(8080);
// server.on('listening', () => {});

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();

    // use nextTick to emit the event once a handler is assigned
    process.nextTick(() => {
      this.emit('event');
    });
  }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});