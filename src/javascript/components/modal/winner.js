import { createElement } from '../../helpers/domHelper';
import { showModal } from './modal';
import { createFighterImage } from '.../../fighterPreview';

export function showWinnerModal(fighter) {
  // call showModal function 
  const title = `${fighter.name} is the ultimate winner!!!`;
  const bodyElement = createElement('h1', 'modal-title');
  bodyElement.innerHTML = createFighterImage(fighter);
  const onClose = () => window.location.reload();
  showModal({ title, bodyElement, onClose });
}
