let url = "http://localhost:3001"

function getData(params){
    axios.get(url + '/todos')
        .then(res => {
            if(res.status === 200 || res.status === 201){
                reload(res.data)
            }
        })
}
getData()

let wrapper = document.createElement('div')
let text = document.createElement('h1')
let grid = document.createElement('div')
let form = document.forms.frm
let btn = document.querySelector('button')


form.onsubmit = (event) => {
   event.preventDefault()

   let get = {
    isDone: false,
    time: new Date().getHours() + ':' + new Date().getMinutes()
    
}   
   let fm = new FormData(form) 
   fm.forEach((value, key) => {
    get[key] = value
   })

   axios.post(url + "/todos")
    .then(res => {
        if(res.status === 200 || res.status === 201){
            getData()
        }
    })

}


function reload(arr) {
    grid.innerHTML = ""

    for(let info of arr){
        // a create
        let item = document.createElement('item')
        let text2 = document.createElement('h2')
        let paragraph = document.createElement('p')
        let img = document.createElement('img')
        // b decor
        item.classList.add('item')
        text2.classList.add('text2')
        text2.innerHTML = info.task
        paragraph.classList.add('paragraph')
        paragraph.innerHTML = info.time
        img.classList.add('image')
        img.src = './icon/del.png'
        // c add
        grid.append(item)
        item.append(text2)
        item.append(paragraph)
        item.append(img)

        // functions
        img.onclick = () => {
           let idx = todos.indexOf(info)

           todos.splice(idx, 1)
            reload(todos)
        }
        info.isDone ? item.classList.add('item_done') : console.log()
        
        item.onclick = () => {
            if(info.isDone){
                info.isDone = false
            }else{
                info.isDone = true
            }
            reload(todos)
        }
    }
}







// b decor
wrapper.classList.add('wrapper')
text.innerHTML = 'Todo List'
text.classList.add('text')
// box.classList.add('box')
// inp.classList.add('inp')
// button.classList.add('button')
// button.innerHTML = 'Add'
grid.classList.add('grid')

//  c add
wrapper.append(text,grid,)
// box.append(inp,button)
document.body.prepend(wrapper)