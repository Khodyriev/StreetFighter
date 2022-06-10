import { controls } from '../../constants/controls';

/*
PlayerOneAttack: 'KeyA',
PlayerOneBlock: 'KeyD',
PlayerTwoAttack: 'KeyJ',
PlayerTwoBlock: 'KeyL',
PlayerOneCriticalHitCombination: ['KeyQ', 'KeyW', 'KeyE'],
PlayerTwoCriticalHitCombination: ['KeyU', 'KeyI', 'KeyO']
*/

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
    //----here we go! - FIGHT!!!----//
    const firstFighterLifeBar = document.querySelector('#left-fighter-indicator'); 
    const secondFighterLifeBar = document.querySelector('#right-fighter-indicator'); 

    const firstFighterCondition = { 
      health: firstFighter.health,
      critEnabled: true,
      isBlocking: false 
    };
    const secondFighterCondition = { 
      health: secondFighter.health,
      critEnabled: true,
      isBlocking: false 
    };

    const fightProssesSpot = () => { 
      if (secondFighterCondition.health <= 0) {
        secondFighterCondition.health = 0;
        resolve(firstFighter);
      }
      if (firstFighterCondition.health <= 0) {
        firstFighterCondition.health = 0;
        resolve(secondFighter);
      }
      firstFighterLifeBar.style.width = `${(firstFighterCondition.health / firstFighter.health) * 100}%`;
      secondFighterLifeBar.style.width = `${(secondFighterCondition.health / secondFighter.health) * 100}%`;
    };

    const firstFighterSuperPOW = []; 
    const secondFighterSuperPOW = []; 

        document.addEventListener('keydown', (e) => {
      if (!e.repeat) {
        switch (e.code) {
          case controls.PlayerOneAttack:
            !secondFighterCondition.isBlocking &&
              !firstFighterCondition.isBlocking &&
              (secondFighterCondition.health -= getDamage(firstFighter, secondFighter));
            break;
          case controls.PlayerTwoAttack:
            !firstFighterCondition.isBlocking &&
              !secondFighterCondition.isBlocking &&
              (firstFighterCondition.health -= getDamage(secondFighter, firstFighter));
            break;
          case controls.PlayerOneBlock:
            firstFighterCondition.isBlocking = true;
            break;
          case controls.PlayerTwoBlock:
            secondFighterCondition.isBlocking = true;
            break;
        }
        if (controls.PlayerOneCriticalHitCombination.includes(e.code)) {
          firstFighterSuperPOW.push(e.code);
          if (firstFighterSuperPOW.length === 3 && firstFighterCondition.critEnabled && !firstFighterCondition.isBlocking) {
            secondFighterCondition.health -= getCriticalHit(firstFighter);
            firstFighterCondition.critEnabled = false;
            setTimeout(() => {
              firstFighterCondition.critEnabled = true;
            }, 10000);
          }
        }
        if (controls.PlayerTwoCriticalHitCombination.includes(e.code)) {
          secondFighterSuperPOW.push(e.code);
          if (
            secondFighterSuperPOW.length === 3 &&
            secondFighterCondition.critEnabled &&
            !secondFighterCondition.isBlocking
          ) {
            firstFighterCondition.health -= getCriticalHit(secondFighter);
            secondFighterCondition.critEnabled = false;
            setTimeout(() => {
              secondFighterCondition.critEnabled = true;
            }, 10000);
          }
        }
        fightProssesSpot();
      }
    });

    document.addEventListener('keyup', (e) => {
      if (!e.repeat) {
        switch (e.code) {
          case controls.PlayerOneBlock:
            firstFighterCondition.isBlocking = false;
            break;
          case controls.PlayerTwoBlock:
            secondFighterCondition.isBlocking = false;
            break;
        }
        if (firstFighterSuperPOW.includes(e.code))
          firstFighterSuperPOW.splice(firstFighterSuperPOW.indexOf(e.code), 1);
        if (secondFighterSuperPOW.includes(e.code))
          secondFighterSuperPOW.splice(secondFighterSuperPOW.indexOf(e.code), 1);
      }
    });
  });
}

export function getDamage(attacker, defender) {
  // return damage
  let damage = getHitPower(attacker) - getBlockPower(defender);
  if (damage <= 0) {damage = 0;}
  return damage;
  }

export function getHitPower(fighter) {
  // return hit power
  let criticalHitChance = Math.random() + 1;
  return fighter.attack * criticalHitChance;
}

export function getBlockPower(fighter) {
  // return block power
  let dodgeChance = Math.random() + 1;
  return fighter.defense * dodgeChance;
}

export function getCriticalHit(fighter) {
  // return critical hit power
  return fighter.attack * 2;
}