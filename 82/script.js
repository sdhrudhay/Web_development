// async function sleep(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(45);
//         }, 1000);
//     })
// }
// (async function main(){
//     let a = await sleep();
//     let b = await sleep();
//     console.log(a);
//     console.log(b);
// })()
// let [x,y,...z]=[1,2,3,4,5,6];
// console.log(z)
let obj = {
    x:1,
    y:2,
    z:3
}
let {x,y} = obj;
console.log(x,y);