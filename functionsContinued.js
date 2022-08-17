const mondayWork = function(activity){
    console.log("this monday i will" + " " + activity)
}
mondayWork("go to the office")

const saturdayFun=function( activity2){
    console.log("this saturday i will" + " " + activity2)
}
saturdayFun("roller-skate")

function wrapAdjective(string1){
    return function (string2){
        console.log("you are " + " "+ string1 +" " + string2)
    }
    
}
wrapAdjective("%a dedicated")("programmer")