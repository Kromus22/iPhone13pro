const getData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Данные не были получены!')
      }
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error(error.message)
    })
    .finally(() => {
      console.log('А я всё равно сработаю!')
    })
}

getData()