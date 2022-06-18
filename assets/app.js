let keyNow = "w"

for (let weidth = 0; weidth <= 10; weidth++){ //render map in hight
    let paddingTop = weidth * 30
    let newAreaW = document.createElement("div")
    newAreaW.className = "map"
    newAreaW.style.top = `${paddingTop}px`
    document.body.appendChild(newAreaW)

    for (let hight = 0; hight <= 10; hight++){ //render map in weidth
        let paddingLeft = hight * 30
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