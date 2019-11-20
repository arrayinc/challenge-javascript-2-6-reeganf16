// *** YOUR ANSWER BELOW ***

// Converting pounds to number of jellybeans

const AVERAGE_JELLYBEAN_WEIGHT_GRAMS = 1.18;
const GRAMS_PER_POUND = 453.59;

function howManyJellybeans(pounds){
    let poundsOfJellybeans = AVERAGE_JELLYBEAN_WEIGHT_GRAMS / GRAMS_PER_POUND;
    let totalJellybeans = pounds / poundsOfJellybeans;
    return Math.floor(totalJellybeans);

}

console.log(howManyJellybeans(100));