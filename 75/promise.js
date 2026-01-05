let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random()
    console.log(a)
    if(a<0.5){
        reject("No random function did not support this");
    }
    else{
        setTimeout(()=>{
        console.log("I am done");
        resolve("harry");
        }, 3000);
    }
});
let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random()
    console.log(a)
    if(a<0.5){
        reject("No random function did not support this 2");
    }
    else{
        setTimeout(()=>{
        console.log("I am done 2");
        resolve("harry 2");
        }, 1000);
    }
});

let prom = Promise.allSettled([prom1, prom2]);
prom.then((a)=>{
    console.log(a)
}).catch((a)=>{
    console.log(a)
});