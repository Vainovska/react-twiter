export const getDate = (time) => {
  const date = new Date(time); ///створення

  //отримання в потрібному форматі
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  //форматування результату
  const formattedDate = `${day}.${month} ${hours}:${minutes}`;
  return formattedDate;
};
