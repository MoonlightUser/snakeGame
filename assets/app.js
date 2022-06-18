let keyNow = "w"
const snake_head_position = {
    width: "60px",
    height: "60px"
}
const snake_head = document.createElement("div")
snake_head.className = "snake"
snake_head.style.top = `${snake_head_position.height}`
snake_head.style.left = `${snake_head_position.width}`
document.body.appendChild(snake_head)

for (let width = 0; width <= 10; width++){ //render map in hight
    let paddingTop = width * 30
    let newAreaW = document.createElement("div")
    newAreaW.className = "map"
    newAreaW.style.top = `${paddingTop}px`
    document.body.appendChild(newAreaW)

    for (let height = 0; height <= 10; height++){ //render map in weidth
        let paddingLeft = height * 30
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

function game(key){

}