
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4)
}

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 

 function createFareMultiplier(newMultiplier) {
    return function fareMultiplier(fare) {
        return fare * newMultiplier;
    }
    }
    
const fareQuintupler = createFareMultiplier(5);
   

    // function fareDoubler(fare) {
    //     const newFareDoubler = createFareMultiplier(fare);
    //     return function func() {
    //         newFareDoubler * 2 // i need higher order a funftion that doubles and uses fare but idk how to make one without quadruling it and declaring a variable
    //     }
    //     }

    // fareDoubler(10);


    function fareDoubler(fare) {
             return fare * 2; }

    function fareTripler(fare) {
        return fare * 3;
    }

    function selectDifferentDrivers(drivers, func) {
        if (func === returnFirstTwoDrivers) { 
            return returnFirstTwoDrivers(drivers); }
        else if (func === returnLastTwoDrivers) {
            return returnLastTwoDrivers(drivers); }
        
    }

    selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],returnFirstTwoDrivers);


    // function createFareMultiplier(fare, fareMultiplier) {
    
    //     return fareMultiplier(fare);
    //     }
    //     createFareMultiplier(function (fare) { return fare * fare});

    // const fareMultiplier = function(fare) { return fare * fare};

    // function fareDoubler(fare) {
    //     return fare * 2;
    // }

//     function fareQuintupler (numberOfPeople){
//         return fare * numberOfPeople
//    };

//    fareQuintupler(5);