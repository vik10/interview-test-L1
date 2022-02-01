const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

export const randomColorGenrtr = () => {
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += colorArr[Math.round(Math.random() * colorArr.length)];
  }
  return color;
};
