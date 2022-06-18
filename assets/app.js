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