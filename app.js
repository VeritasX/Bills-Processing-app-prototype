'use strict'
var whatIsTheItem, answer, answerChanged='YES', list = document.getElementById('list'), billsArray=[], costsArray=[], amount=0, costs, parseCosts;

function changeCosts(){
  let costsChanged = '$' + costs;
  costs=costsChanged;
  return costs;
}
function addTheCost(){
  amount = amount + parseCosts;
}

while (answerChanged == 'YES'){
  whatIsTheItem = prompt('What is the item you would like to add to your list?');
  if (answerChanged == 'YES'){
    costs=prompt('what is the amount of your bill? Note: You may add cents as well.');
  }
        parseCosts = parseFloat(costs);
        addTheCost();
        changeCosts();
      //Add the stored amount of whatIsTheItem to the billsArray
        billsArray.push(whatIsTheItem);
      //Add the stored amount of the costs variable to the costsArray
        costsArray.push(costs);
        answer = prompt ('Whould you like to add more Items to the list?  Type yes or no.');
        answerChanged = answer.toUpperCase();
}
amount = amount.toFixed(2);
for (let i = 0; i < billsArray.length; i++){
  list.innerHTML += '<strong>Bill: ' + billsArray[i] + '</strong> , <p> Cost : ' + costsArray[i] + ' </p> <br>';
}
  list.innerHTML += '<strong>Your Total is  $' + amount + '</strong>';
