// console.log('1');
// setTimeout(()=>{
//     console.log("2");
// },0);
// console.log(3);
const callback = (s) =>{
    console.log(s);
}
const loadscript = (src, callback) =>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc);
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (s) =>{
    console.log(s);})