 
    const display = document.getElementById('display');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const low = document.getElementById('low');
const attempts = document.getElementById('attempts');
const wins = document.getElementById('wins');
const loss = document.getElementById('loss');
const money = document.getElementById('cashbox');
const moneyPlayed = document.getElementById('stake');
//const comp = document.getElementById('comp');

 
function random(number){

  return Math.floor(Math.random()*number + 1);

 
}
 
const score ={
  wins :0,
  loss :0,
  cash :200,
  counter:0
}
 


function game(user,number){
 
  if(score.cash > 0){
    
  
  if(moneyPlayed.value){
 
if(moneyPlayed.value>0){
 if(moneyPlayed.value < score.cash){
  if(input.value ==='' && moneyPlayed.value === '' ){
    display.style.fontSize='2.5rem';
    display.style.color='red';
    display.textContent = 'Enter a number';
    low.textContent='';
    moneyPlayed.style.display = 'none';
  }

  else{
    if(user > number){
        low.textContent ='Too High';
      }else if(user < number){
        low.textContent ='Too Low';
      }
        if(+user === number){
          score.cash += 50;
            display.style.color='green';
            display.style.fontSize='3rem';
            display.textContent=`Congrats 🤑  you won on ${counter} attempts`;
            low.textContent='';
            score.counter=0;
           score.wins++;
             
        }
        else{
          score.cash -=moneyPlayed.value;
          display.style.fontSize='2.5rem';
            display.style.color ='tomato';
            display.textContent = 'keep trying';
            score.loss++;
        }
        input.value = '';
        moneyPlayed.value = '';
        attempts.textContent=score.counter;
        money.textContent=`Bal: $${score.cash}`;
      
            wins.textContent = `Wins: ${score.wins}`;
            loss.textContent= `Loss : ${score.loss}`;
      }
    }
        else{
          low.textContent = `insufficient balance: balance  $${score.cash}`;
        score.counter;
          display.textContent= '';
        }
  }
  else{
   low.textContent = 'your stake must be above zero';
  }
}else{
  low.textContent='enter stake to continue';
  display.textContent = '';
}
  }else{
    low.textContent = 'make a deposit to continue';
   counter = 0;
    display.textContent = '';
  }
 

}
 
function play(){
 //comp.innerText = random(10);
  input.value === ''? score.counter : score.counter++;
    game(input.value,random(10))
   
   
}
btn.addEventListener('click',play)
 
 

