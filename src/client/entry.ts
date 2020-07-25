import Model from "./model";
import View from './view';
import Controller from './controller'

(async () => {
  try {
    Controller.dialogs();
  }catch (e) {
    console.log('error fetch data: ', e);
  }
})();