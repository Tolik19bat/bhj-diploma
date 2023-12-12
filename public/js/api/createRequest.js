/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {

  const xhr = new XMLHttpRequest();//создаём новый объект для передачи запроса по api
  const formData = new FormData();//создаём новую форму для данных
  xhr.responseType = 'json';//ответ в типе данных json

  xhr.open(options.method, options.url);//инициализируем созданный запрос

  options.callback = (err, response) => {//присваеваем нашему свойству callback безимянную функцию с двумя параметрами
    console.log(err);//выводим в консоль
    console.log(response);
  }
  try {
    if (options.method == 'GET') {//если в методе GET
      xhr.send();//отправляем запрос на получение
    }
    if (options.method == 'POST') {//если в методе POST
      for (let [key, value] of Object.entries(options.data)) {//разбиваем объект data(с помощью Object.entries()) на пары ключь значение и перебирая их,
        formData.append(key, value);//добавляем в форму новые ключ знначение
      }
      xhr.send(formData);//отправляем запрос с новыми данными
    }
  }
  catch (error) {//если ошибка
    console.error('Ошибка, если есть', error);//выкидываем в консоль ошибку
  }

  xhr.onload = function () {//слушаем
    //код сработает после того, как мы получим ответ сервера
    if (xhr.status != 200) {// анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {// если всё прошло гладко, выводим результат
      console.log(xhr.response); // response -- это ответ сервера
    }
  }
}


//входные данные
// createRequest({
//   url: 'user',
//   data: {
//     mail: 'ivan@poselok.ru',
//     password: 'odinodin'
//   },
//   method: 'GET',
//   callback: (err, response) => {
//     console.log(err, response)
//   }
// })