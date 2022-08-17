// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation,HqInBlocks){
    numberOfBlocks=HqInBlocks-pickUpLocation
    console.log(numberOfBlocks + " " +"Blocks left")
    
}
distanceFromHqInBlocks(12,20)

function distanceFromHqInFeet(){
    const block=264;
    blocksInFeet=numberOfBlocks * block;
    console.log(blocksInFeet +" " +"feets away");
}
distanceFromHqInFeet()
function distanceTravelledInFeet(start,destination){
    let numberOfFeetTravelled=((destination-start) * 264);
    console.log(numberOfFeetTravelled + " " +"feets from uptown/downtown")
}
distanceTravelledInFeet(34,38)
function calculatesFarePrice(start,destination){
    let totalFeet=destination-start;
    let totalFeetInMeters=numberOfBlocks* 264
    if (totalFeetInMeters<=400){
        console.log("transport cost is free")
    }
    else if (totalFeetInMeters >=2500){
        console.log("cannot travell that far")
    }
    else if (totalFeetInMeters>=400 && totalFeetInMeters<=2500){
        console.log("fair price")
    }
}
calculatesFarePrice()


