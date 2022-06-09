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
  return hitPower = fighter.attack * criticalHitChance;
}

export function getBlockPower(fighter) {
  // return block power
  let dodgeChance = Math.random() + 1;
  return blockPower = fighter.defense * dodgeChance;
}

export function getCriticalHit(fighter) {
  // return critical hit power
  return fighter.attack * 2;
}