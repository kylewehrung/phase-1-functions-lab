// Code your solution in this file!


function distanceFromHqInBlocks(someValue) {
    const hq = 42
    const distance = someValue - hq;
    if (distance > 0) {
        return distance;
}
else { 
    return -1 * distance;
}
}
distanceFromHqInBlocks("43"); 



function distanceFromHqInFeet(someValue) {
    const feet = 264;
    return( feet * distanceFromHqInBlocks(someValue));
   
    }
    distanceFromHqInFeet("43");



    function distanceTravelledInFeet (x, y) {
       const distance = (x - y) * 264
      if (distance > 0) {
        return distance;
      } else {
        return -1 * distance;
      }
      
    }

    distanceTravelledInFeet("43", "48");


    function calculatesFarePrice (x, y) {
        const distance = Math.abs((x - y) * 264);
        const cost = Math.abs((distance - 400) * 0.02);
        const flatRate = 25;
        if (distance < 400) {
            return 0;
        } else if (distance < 2000 ) {
            return cost;
        } else if (distance < 2500) {
            return flatRate;
        } else if ( distance > 2500) {
          return 'cannot travel that far';
        }
        }
    
calculatesFarePrice("50", "51");




















