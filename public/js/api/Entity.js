/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback) {//создаём статический метод
    createRequest({//функция шаблон запроса
      url: this.URL,
      data: data,
      method: 'GET',//для получения данных с сервера.
      callback: callback
    })
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    createRequest({
      url: this.URL,
      data: data,
      method: 'PUT',//для обновления данных
      callback: callback
    })
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback) {
    createRequest({
      url: this.URL,
      data: data,
      method: 'DELETE',//для удаления данных с сервера
      callback: callback
    })
  }
}
