import { createElement } from '../../helpers/domHelper';
import { showModal } from './modal';
import { createFighterImage } from '../fighterPreview';
import App from '../../app';
import { createImage } from '../fightersView';


export function showWinnerModal(fighter) {
  // call showModal function 
  const title = `${fighter.name} is the ultimate winner!!!`;
  const bodyElement = createImage(fighter);
  
  function startNewGame() {
    const root = document.getElementById('root');
    root.innerHTML = '';
    App.startApp();
  }
  showModal({ title, bodyElement, onClose: () => startNewGame() });
}
