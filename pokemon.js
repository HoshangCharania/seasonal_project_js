var AllPokes = [];  // Keeping a track of all pokemon's

function Pokemon(name,type,hp,def, atk, legend) { // Initializing a new object
  this.name = name;
  this.type = type;
  this.hp = hp;
  this.def = def;
  this.atk = atk;
  this.legend =legend;
  message = document.getElementById("test");
  var a="Please enter a "
  try { // throwing errors for TypeError
        if(typeof name != "string") throw "string for the name";
        else if(typeof type != "string") throw "string for the type";
        else if(typeof hp != "number") throw "number for the hp";
        else if(typeof def != "number") throw "number for the def";
        else if(typeof atk != "number") throw "string for the atk";
        else if(typeof legend != "boolean") throw "string for the legend";
    }
    catch(err) {
        message.innerHTML = a+err;
    }
  AllPokes.push(this);
}
Pokemon.prototype.attack = function(target) { //attacking a pokemon
   if(target.hp>0){
   target.hp = target.hp - (this.atk-target.def);
   getval(); // Calling a function on the front end to display
   }
    else{
        target.hp=0;
        dizzy(); // Calling a function on the front end to display
        
    }
};
Pokemon.prototype.aliveCheck = function() { //checking if alive
   if(this.hp>0){
       alive(true); // Calling a function on the front end to display
       return true;
   }
    else{
       alive(false); // Calling a function on the front end to display
       return false; 
    }
};

Pokemon.all = function(){ // Returning all the instances created.
    var a="";
    for (var x in AllPokes) {
  //document.getElementById("test").innerHTML+= AllPokes[x].name+", ";
        a=JSON.stringify(AllPokes[x])+a;  
        
}    
    test(a); // Calling a function on the front end to display
    return a;
}


