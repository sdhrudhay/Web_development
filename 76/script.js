let getData = async () => {
    // return new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         resolve(455);
    //     }, 3500);
    // });
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(x);
    let data = await x.json();
    console.log(data);
}
let main = async () => {
    console.log("Loading modules");
    console.log("Do something else");
    console.log("Load data");
    let data = await getData();
    // data.then(()=>{
    //     console.log("Process the data");
    // })
    console.log(data);
    console.log("Process the data")
}
main()
