const newId = (id = 0) => () => id++;
const unique = newId();
export default unique;
