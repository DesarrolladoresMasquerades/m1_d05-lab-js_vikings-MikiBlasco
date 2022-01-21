// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength; 
  }

  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name
  }
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0) 
    return `${this.name} has received ${damage} points of damage`;
    else 
    return `${this.name} has died in act of combat`
  }
  battleCry(){
   return "Odin Owns You All!" 
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
  super(health, strength);
}

receiveDamage(damage){
  this.health -= damage
  if (this.health > 0) 
  return `A Saxon has received ${damage} points of damage`;
  else 
  return "A Saxon has died in combat"
}
 
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

addViking(object){
  this.vikingArmy.push(object)
}
addSaxon(object){
  this.saxonArmy.push(object)
}

vikingAttack(){
  const indexSaxon = [Math.floor(Math.random()) * this.saxonArmy.length];
  const indexViking = [Math.floor(Math.random()) * this.vikingArmy.length];

  const randomSaxon = this.saxonArmy[indexSaxon];
  const randomViking = this.vikingArmy[indexViking];

  let saxonVictim = randomSaxon.receiveDamage(randomViking.strength)
  if (randomSaxon.health <= 0) this.saxonArmy.splice(indexSaxon,1) 
  
  return saxonVictim


}
saxonAttack(){
  const indexSaxon = [Math.floor(Math.random()) * this.saxonArmy.length];
  const indexViking = [Math.floor(Math.random()) * this.vikingArmy.length];

  const randomSaxon = this.saxonArmy[indexSaxon];
  const randomViking = this.vikingArmy[indexViking];

  let VikingVictim = randomViking.receiveDamage(randomSaxon.strength)
  if (randomViking.health <= 0) this.vikingArmy.splice(indexViking,1) 
  
  return VikingVictim
}
showStatus(){
  
}

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
