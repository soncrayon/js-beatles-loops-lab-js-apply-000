// add solution here
let emptyArray = [];
let factsArray = []; 

function theBeatlesPlay (musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray; 
}

function johnLennonFacts (facts) {
  for (let i = 0; i < facts.length; i++) {
    factsArray.push(facts[i] + "!!!"); 
  }
  return factsArray; 
}

function iLoveTheBeatles (n) {
  let loveArray = [];
  let text = "I love the Beatles!";
  do {
    loveArray.push(text); 
    n++; 
  }
  while (n < 15);
  return loveArray; 
}
