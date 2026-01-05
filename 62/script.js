function choose_random(a,b,c){
    let random = Math.random()
    return (random<0.33)?  a : ((random<0.66)?  b : c) 
}

let business_name = '';
business_name += choose_random('Crazy', 'Amazing', 'Fire');
business_name += ' ';
business_name += choose_random('Engine', 'Foods', 'Garments');
business_name += ' ';
business_name += choose_random('Bros', 'Limited', 'Hub');

console.log(business_name)