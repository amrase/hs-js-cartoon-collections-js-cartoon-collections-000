var dwarves = ["Doc","Dopey","Bashful","Grumpy"];

function dwarfRollCall(dwarves){
  var array =[]
  for (var i=0;i<dwarves.length;i++){
    array.push(`${i+1}. ${dwarves[i]} `)
  }
  return array.join("")
}

function summonCaptainPlanet(planeteerCalls){
    return planeteerCalls.map(function(ele){
      return ele.toUpperCase() + "!";
    });
}

function longPlaneteerCalls(words) {
  for(var i=0;i<words.length;i++)
  {   if(words[i].length >4)
      {
          return true;
      }
      else {
        return false;
      }

  }
}

function findTheCheese (foods) {
    for(var i=0;i<foods.length;i++)
    { if(foods[i]=="cheddar" || foods[i]=="gouda" || foods[i]=="camembert")
      {
          return foods[i];
      }
    }
    return "no cheese!";

}
