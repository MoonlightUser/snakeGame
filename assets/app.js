const m = 30 // 1m = 30px 

let keyNow = "w"
let snake_head_position = {
    y: 2*m,
    x: 2*m
}

let apple_position = {
    x: 7*m,
    y: 4*m
}
const snake_head = document.createElement("div")
snake_head.id = "snake_HEAD"
snake_head.className = "snake"
snake_head.style.top = `${snake_head_position.x}px`
snake_head.style.left = `${snake_head_position.y}px `
document.body.appendChild(snake_head)

const apple = document.createElement("div")
apple.id = "apple_id"
apple.className = "apple"
apple.style.top = `${apple_position.y}px`
apple.style.left = `${apple_position.x}px `
document.body.appendChild(apple)

for (let x = 0; x <= 10; x++){ //render map in hight
    let paddingTop = x * m
    let newAreaW = document.createElement("div")
    newAreaW.className = "map"
    newAreaW.style.top = `${paddingTop}px`
    document.body.appendChild(newAreaW)

    for (let y = 0; y <= 10; y++){ //render map in weidth
        let paddingLeft = y * m
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
function checkAppple(){
    // console.log(snake_head_position.y,  apple_position.y, "y  **  x", snake_head_position.x, apple_position.x);
    if (snake_head_position.y == apple_position.y && snake_head_position.x == apple_position.x){
        console.log("numnum");
    }
}
function game(){
    if (keyNow == "w"){
        snake_head_position.y -= m
        renderSnake()
    }
    else if (keyNow == "a"){
        snake_head_position.x -= m
        renderSnake()
    }
    else if (keyNow == "d"){
        snake_head_position.x += m
        renderSnake()
    }
    else if (keyNow == "s"){
        snake_head_position.y += m
        renderSnake()
    }
    checkAppple()
}

function renderSnake(){
    let snake_head = document.getElementById("snake_HEAD")
    snake_head.className = "snake"
    snake_head.style.top = `${snake_head_position.y}px`
    snake_head.style.left = `${snake_head_position.x}px`
    document.body.appendChild(snake_head)
}
function sleep(ms) {
    console.log("object");
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (let i = 0; i <= 10; i++){
    

}