let a = document.querySelector(".cont1")
for (let i = 0; i < 20; i++) {
    document.getElementsByClassName("box")[i].addEventListener("click", () => {
        if (i == 0) {
            a.innerHTML = ``
        }
        else if (i == 1 || i >= 3 && i < 19) {
            a.innerHTML = a.innerHTML + document.getElementsByClassName("box")[i].innerHTML
        }
        else if (i == 2) {
            let html = Array.from(a.innerHTML)
            html.pop()
            let h = html.join("")
            a.innerHTML = h
        }
        else {
            a.innerHTML = eval(a.innerHTML)
        }
    }
    )
}
document.body.addEventListener("keydown", (e) => {
    if (e.key != "Backspace" && e.key != "Delete" && e.key != "Enter" && e.key != "=" && e.key != "Shift") {
        a.innerHTML = a.innerHTML + e.key
    }
    else if (e.key == "Delete") {
        a.innerHTML = ``
    }
    else if (e.key == "Backspace") {
        let html = Array.from(a.innerHTML)
        html.pop()
        let h = html.join("")
        a.innerHTML = h
    }
    else if (e.key == "Shift") {
        a.innerHTML = a.innerHTML
    }
    else if (e.key == "Enter" || e.key == "=") {
        a.innerHTML = eval(a.innerHTML)
    }
})
