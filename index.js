var dwarves = ["Doc","Dopey","Bashful","Grumpy"];

function dwarfRollCall(dwarves){
  var array =[]
  for (var i=0;i<dwarves.length/2;i++){
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
    { if(foods[i]=="cheddar" || foods[i]=="gouda" || foods[i]=="camembert" || foods[i]=="swiss")
      {
          return foods[i];
      }
    }
    return "no cheese!";

}

function wordsWithB(words)
{   var finalWords=[];
    for(var i=0;i<words.length;i++)
      {     if(words[i][0] == 'b')
            {
               finalWords.push(words[i]);
            }
        
      }
  return finalWords;
}

console.log(wordsWithB(["bob", "sally", "benny"]))
