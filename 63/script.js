let arr = [1,2,3,4,5];
console.log(arr.toString())
console.log(arr.join(' and '))
for (const i in arr){
    console.log(i)
}
arr.forEach((value, index, arr) => {
    console.log(value, index, arr)
})