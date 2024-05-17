
const drivers = ['Antonia','Nuru','Amari','Mo']

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const drivers2 = ['Antonia','Nuru','Amari','Mo']

const returnLastTwoDrivers = function(drivers2){
    return drivers2.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, 
    returnLastTwoDrivers
 ]

 const createFareMultiplier = function(fareMultiplier){
    return function(fare){
        return(fare * 5)
    }
 }
 
const fareDoubler = function(fD){
return(fD * 2)
}
const fareTripler = function(fT){
    return(fT * 3)
}

const selectDifferentDrivers = function(drivers, func) {  
    return func(drivers)
}



     

 

