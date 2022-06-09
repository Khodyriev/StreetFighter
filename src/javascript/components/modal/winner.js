import { createElement } from '../../helpers/domHelper';
import { showModal } from './modal';
import { createFighterImage } from '../fighterPreview';
import App from '../../app';


export function showWinnerModal(fighter) {
  // call showModal function 
  const title = `${fighter.name} is the ultimate winner!!!`;
  const bodyElement = createFighterImage(fighter);;
  
  function startNewGame() {
    const root = document.getElementById('root');
    root.innerHTML = '';
    App.startApp();
  }
  showModal({ title, bodyElement, onClose: () => startNewGame() });
}
