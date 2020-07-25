import Model from './model';
import View from './view';

import dialogsComponent from './components/DialogsComponent'

export default {
  async dialogs(){
    const dialogs = await Model.getDialogs();
    dialogsComponent.setData(dialogs);
    dialogsComponent.render();
  }
}