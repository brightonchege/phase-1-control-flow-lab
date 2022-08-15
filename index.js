function scuberGreetingForFeet(ride){
 
   if(ride <= 400){
       return "This one is on me!"
        }
   if(ride > 2500 ){  
        return "No can do."
       }
   if (ride >= 2000){
      return "I will gladly take your thirty bucks."
     }
}
scuberGreetingForFeet(ride)


    function ternaryCheckCity(city){

     if(city === 'NYC'){
      return 'Ok, sounds good.'
     }
     else{
      return 'No go.'
       }
     }
ternaryCheckCity(city)


function switchOnCharmFromTip(tip){

switch(tip){
  case "generous":
  return "Thank you so much."

  case "not as generous":
  return "Thank you."

  case "thanks for everything":
  return "Bye."
}

  }
switchOnCharmFromTip(tip)

