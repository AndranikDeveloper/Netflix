const date = new Date();
export const totalDate =
  date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
const minutes =
  date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

export const totalTime = hours + ':' + minutes;
