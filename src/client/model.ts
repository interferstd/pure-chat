import inputData from './testData'
export default {
  getUsers(){
    return inputData.users;
  },
  getDialogs(){
    // @ts-ignore
    return inputData.users.reduce((acc, it) => {
      acc.push({
        _id: it.id,
        fullName: it.name + ' ' + it.surname,
        avatar: it.avatar ? it.avatar.small : undefined,
        shortName: it.name.slice(0, 1) + ' ' + it.surname.slice(0, 1),
        unreadable: it.unreadable.status ? it.unreadable.count : 0,
        group: it.group
      });
      return acc;
    }, [])
  }
}