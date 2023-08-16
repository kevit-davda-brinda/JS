console.log("Timer execution start...")

const timeOut1 = setTimeout(()=>{
    console.log("SetTimeout1 running...")
},2000)


const timeOut2 = ()=>{
    setTimeout(()=>{
    console.log("SetTimeout2 running...")
},9000)
}

const timeOut3 = setTimeout(()=>{
    console.log("SetTimeout3 running...")
},0)

setImmediate(()=>console.log("setImmediate running..."),10000)

process.nextTick(()=>{
    console.log("Next Tick running...");
    timeOut2()
})

console.log("Timer execution ended...")