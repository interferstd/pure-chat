import View from "../view"

const dialogsEl:HTMLElement = document.querySelector('.chats');
let dialogs:object[] = [];

export default {
  setData(newDialogs:object[]){
    dialogs = newDialogs;
  },
  render(){
    dialogsEl.innerHTML = View.render('chats', {dialogs: dialogs})
  }
}