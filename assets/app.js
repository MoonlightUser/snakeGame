const m = 30 // 1m = 30px 

let keyNow = "w" // this varible will show what key was clicked
let snake_body_position = { //start position of snake head
    x: 2*m,
    y: 2*m
}

let apple_position = { //start position of apple
    x: 2*m,
    y: 0*m
}

let snake_body_new = [{ //start position of apple
    x: 2*m,
    y: 2*m
}]
let snake_body_old = [{ //start position of apple
    x: 2*m,
    y: 2*m
}]

const snake_head = document.createElement("div") //create and render the snake head
snake_head.id = "snake_HEAD"
snake_head.className = "snake"
snake_head.style.top = `${snake_body_new[0].x}px`
snake_head.style.left = `${snake_body_new[0].y}px `
document.body.appendChild(snake_head)

const apple = document.createElement("div") //create and render the apple
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
    }
    else if (`${key.key}` == "a" || `${key.key}` == "A"){
        console.log('%capp.js line:20 "w"', 'color: #007acc;', "a");
        keyNow = "a"
    }
    else if (`${key.key}` == "d" || `${key.key}` == "D"){
        console.log('%capp.js line:20 "w"', 'color: #007acc;', "d");
        keyNow = "d"
    }
    else if (`${key.key}` == "s" || `${key.key}` == "S"){
        console.log('%capp.js line:20 "w"', 'color: #007acc;', "s");
        keyNow = "s"
    }
})

function checkAppple(){ //if apple was eaten by head of snake we use changeApple()
    if (snake_body_new[0].y == apple_position.y && snake_body_new[0].x == apple_position.x){
        console.log("numnum");
        changeApple()
    }
}

function changeHeadPosition(){
    
    
    if (keyNow == "w"){
        snake_body_new[0].y -= m
    }
    else if (keyNow == "a"){
        snake_body_new[0].x -= m
    }
    else if (keyNow == "d"){
        snake_body_new[0].x += m
    }
    else if (keyNow == "s"){
        snake_body_new[0].y += m
    }
    
    checkAppple()
}

function changeBodyPosiion(){

}

function renderSnake(){//render the snake
    let snake_head = document.getElementById("snake_HEAD")
    snake_head.className = "snake"
    snake_head.style.top = `${snake_body_new[0].y}px`
    snake_head.style.left = `${snake_body_new[0].x}px`
    document.body.appendChild(snake_head)
}

function changeApple(){ //change apple position on random
    apple_position = {
        x: Math.floor(Math.random() * 11)*m,
        y: Math.floor(Math.random() * 11)*m
    }
    apple.style.top = `${apple_position.y}px`
    apple.style.left = `${apple_position.x}px `
    document.body.appendChild(apple)
    newBodySnake()
}

function renderBody(){
    if (snake_body_new.length != 1){
        for(let g = 1; g < snake_body_new.length; g++){
            let snake_body = document.getElementById(`snake_BODY_${g}`) //create and render the snake head
            snake_body.style.top = `${snake_body_old[g-1].y}px`
            snake_body.style.left = `${snake_body_old[g-1].x}px `
            document.body.appendChild(snake_body)
            snake_body_new[g] = {
                x: snake_body_old[g-1].x,
                y: snake_body_old[g-1].y
            }
            
            
        }
    }
}

function newBodySnake(){
    let snake_body = document.createElement("div") //create and render the snake head
    snake_body.id = `snake_BODY_${snake_body_new.length}`
    snake_body.className = "snake_b"
    snake_body.style.top = `${snake_body_old.at(-1).y}px`
    snake_body.style.left = `${snake_body_old.at(-1).x}px `
    document.body.appendChild(snake_body)
    let snake_body_position = {
        x: snake_body_old.at(-1).x,
        y: snake_body_old.at(-1).y
    }
    snake_body_new.push(snake_body_position)
    snake_body_old.push(snake_body_position)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



async function start(){
    while(1){
        await sleep(100)
        console.log("cycle");
        for (let o in snake_body_old){
            
            snake_body_old[o].x = snake_body_new[o].x
            snake_body_old[o].y = snake_body_new[o].y
        }
        changeHeadPosition()
        renderBody()
            
        renderSnake()
        
        console.log(snake_body_new);
        console.log(snake_body_old);
    }    
}
start()
