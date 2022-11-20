export default ({ main, sub }) => {
  return main.some(item => sub.includes(item));
};
