const newId = (id = 7) => () => id++;
const unique = newId();
export default unique;