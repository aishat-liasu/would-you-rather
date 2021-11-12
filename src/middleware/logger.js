const logger = (store) => (next) => (action) => {
  console.log('The action: ', action);
  const nextValue = next(action);
  console.log('The new state: ', store.getState());
  return nextValue;
};

export default logger;
