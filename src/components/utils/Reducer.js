export const reducerFunction = (state, action) => {
  const { type } = action;

  switch (type) {
    case 'add':
      return { count: state.count + 1 };
    case '-':
      console.log('-');
      // return { money: state.money + 10 };
    case '/':
      console.log('/');
      // return { money: state.money + 5000 };
    case '*':
      console.log('*');
      // return { money: state.money + 5000 };
    default:
      return state;
  }
}
