import hideBtnImg from '../assets/close.svg';
import updateProjectSelectors from "./project-selector.js";
import { set } from 'date-fns';

const hideBtn = document.querySelectorAll('.close-modal-btn');
hideBtn.forEach(btn => btn.querySelector('img').src = hideBtnImg);

function showForm(modal) {
  updateProjectSelectors();
  modal.showModal();
}

function joinDateStr(date, time) {
  if (date) return date + (time ? 'T' + time : '');
  if (time) {
    const [hours, minutes] = time.split(':');
    return set(new Date(), {
      hours,
      minutes,
    });
  }
  return '';
}

export { showForm, joinDateStr };