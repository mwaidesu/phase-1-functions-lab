// distance from HQ in blocks
let hqBlock = 42;
function distanceFromHqInBlocks(blockNumber) {
  let distance;

  if (blockNumber >= 42) {
    distance = blockNumber - hqBlock;
  } else {
    distance = Math.abs(blockNumber - hqBlock);
  }
  return distance;
}

const distance = distanceFromHqInBlocks(32);
console.log(distance + " blocks");

//distance from HQ in feet
function distanceFromHqInFeet(blockNumber) {
  return (Math.abs(distanceFromHqInBlocks(blockNumber)) * 264);
}

console.log(distanceFromHqInFeet(50) + " feet")

//distance travelled in Feet
function distanceTravelledInFeet(start, end){
return(Math.abs(end-start)*264);
}


function calculatesFarePrice(start, end){
 
  if(distanceTravelledInFeet(start, end) <= 400){
    return 0;
  }
  else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) <= 2000){
    return (0.02 *(distanceTravelledInFeet(start, end) -400))
  }
  else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) <= 2500){
    return 25;
  }
  else if (distanceTravelledInFeet(start, end) > 2500){
    return 'cannot travel that far';
  }

}

