const m = 30 // 1m = 30px 

let keyNow = "w"
let snake_head_position = {
    width: 2*m,
    height: 2*m
}

let apple_position = {
    width: 7*m,
    height: 4*m
}
const snake_head = document.createElement("div")
snake_head.id = "snake_HEAD"
snake_head.className = "snake"
snake_head.style.top = `${snake_head_position.height}px`
snake_head.style.left = `${snake_head_position.width}px `
document.body.appendChild(snake_head)

for (let width = 0; width <= 10; width++){ //render map in hight
    let paddingTop = width * m
    let newAreaW = document.createElement("div")
    newAreaW.className = "map"
    newAreaW.style.top = `${paddingTop}px`
    document.body.appendChild(newAreaW)

    for (let height = 0; height <= 10; height++){ //render map in weidth
        let paddingLeft = height * m
        let newAreaH = document.createElement("div")
        newAreaH.className = "map"
        newAreaH.style.top = `${paddingTop}px`
        newAreaH.style.left = `${paddingLeft}px` 
        document.body.appendChild(newAreaH)
    }
}

document.addEventListener("keydown", (key) =>{
    if (`${key.key}` == "w" || `${key.key}` == "W"){
        console.log('%capp.js line:20 "w"', 'color: #007acc;', "w");
        keyNow = "w"
        game()
    }
    else if (`${key.key}` == "a" || `${key.key}` == "A"){
        console.log('%capp.js line:20 "w"', 'color: #007acc;', "a");
        keyNow = "a"
        game()
    }
    else if (`${key.key}` == "d" || `${key.key}` == "D"){
        console.log('%capp.js line:20 "w"', 'color: #007acc;', "d");
        keyNow = "d"
        game()
    }
    else if (`${key.key}` == "s" || `${key.key}` == "S"){
        console.log('%capp.js line:20 "w"', 'color: #007acc;', "s");
        keyNow = "s"
        game()
    }
})

function game(){
    if (keyNow == "w"){
        snake_head_position.width -= m
        renderSnake()
    }
    else if (keyNow == "a"){
        snake_head_position.height -= m
        renderSnake()
    }
    else if (keyNow == "d"){
        snake_head_position.height += m
        renderSnake()
    }
    else if (keyNow == "s"){
        snake_head_position.width += m
        renderSnake()
    }
}

function renderSnake(){
    let snake_head = document.getElementById("snake_HEAD")
    snake_head.className = "snake"
    snake_head.style.top = `${snake_head_position.width}px`
    snake_head.style.left = `${snake_head_position.height}px`
    document.body.appendChild(snake_head)
}
function sleep(ms) {
    console.log("object");
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (let i = 0; i <= 10; i++){
    

}