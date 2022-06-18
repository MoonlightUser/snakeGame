for (let hight = 0; hight == 10; hight++){ //render map in hight
    const newArea = document.createElement("div")
    newArea.className = "map"
    newArea.style.top = `${hight*10}`

    for (let weidth = 0; weidth == 10; weidth++){ //render map in weidth
        const newArea = document.createElement("div")
        newArea.className = "map"
        newArea.style.left = `${weidth*10}`
    }
}