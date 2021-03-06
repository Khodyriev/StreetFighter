import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  // todo: show fighter info (image, name, health, etc.)

  
  if (fighter) {
  let imageElement = createFighterImage(fighter);
  let fighterInfo = createElement({ tagName: 'div', className: 'fighter-preview__info' });
  fighterInfo.innerHTML = `<strong>Name: ${fighter.name}<br>Health: ${fighter.health}<br>Attack: ${fighter.attack}<br>Defense: ${fighter.defense}</strong>`;
  
  fighterElement.append(imageElement);
  fighterElement.append(fighterInfo);
}
  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
