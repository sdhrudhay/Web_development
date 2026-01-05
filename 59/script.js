a = prompt('Enter the first number: ')
b = prompt('Enter the second number: ')
if (Math.random()<0.1){
    console.log(a+'+'+b+': ', a-b)
    console.log(a+'-'+b+': ', a/b)
    console.log(a+'*'+b+': ', +a + +b)
    console.log(a+'/'+b+': ', a**b)
}
else{
    console.log(a+'+'+b+': ', +a + +b)
    console.log(a+'-'+b+': ', a-b)
    console.log(a+'*'+b+': ', a*b)
    console.log(a+'/'+b+': ', a/b)
}