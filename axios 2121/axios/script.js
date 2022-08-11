let url = "https://jsonplaceholder.typicode.com/photos"

axios.get(url)
    .then(res => reload(res.data))
    .catch(err => console.log(err))


