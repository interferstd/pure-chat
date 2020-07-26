import inputData from './testData'

interface IDialogs {
  _id: number,
  fullName: string,
  avatar: string | undefined,
  shortName: string,
  unreadable: number,
  group: string[]
}
export default {
  getUsers(){
    return inputData.users;
  },
  getDialogs(){
    // @ts-ignore
    return inputData.users.reduce((acc, it) => {
      const dialogsObj: IDialogs ={
        _id: it.id,
        fullName: it.name + ' ' + it.surname,
        avatar: it.avatar ? it.avatar.small : undefined,
        shortName: it.name.slice(0, 1) + ' ' + it.surname.slice(0, 1),
        unreadable: it.unreadable.status ? it.unreadable.count : 0,
        group: it.group
      }
      acc.push(dialogsObj);
      return acc;
    }, [])
  }
}