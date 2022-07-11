function numWaterBottles(numBottles, numExchange) {
    let totalBottles = 0;
    if(numBottles < numExchange) return numBottles
    while(numBottles > numExchange) {
        totalBottles += numBottles
        // console.log(totalBottles)
        numBottles = Math.floor(numBottles / numExchange)
        
    }
    return numBottles + totalBottles + 1
}

console.log(numWaterBottles(15, 7))