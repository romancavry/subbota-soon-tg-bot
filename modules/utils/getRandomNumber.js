export default ({ min, max }) => {
  return Math.floor(Math.random() * (max - min) + min);
};
