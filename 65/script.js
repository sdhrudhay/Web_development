function factorial(n){
    fact = 1
    for(let i=n; i>0; i--){
        fact *= i
    }
    return fact
}

// console.log(factorial(3))
n=0
let l = []
for(let i=1;i<=n;i++){
    l.push(i)
}
let fact = l.reduce((a,b) => {
    return a*b
})
// console.log(fact)