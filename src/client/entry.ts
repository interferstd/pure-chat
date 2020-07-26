import Model from "./model";
import View from './view';
import Controller from './controller';
import '@/client/styles/style.css';



(async () => {
  try {
    await Controller.dialogs();
  }catch (e) {
    console.log('error fetch data: ', e);
  }
})();