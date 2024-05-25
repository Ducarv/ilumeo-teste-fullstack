export const generateUserCode = () => {
  return Math.floor(Math.random() * 0xfffffff)
    .toString(16)
    .padStart(7, "0")
    .toUpperCase();
};
