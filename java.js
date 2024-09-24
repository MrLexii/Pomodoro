let timer = document.getElementById("timer")

let travail = 10
let pause = 4
let sec = 60
let bool = true

let buttontravail = document.getElementById("travail")
buttontravail.addEventListener("click", evt=>{
    timer.textContent = "Temps Restant : 25 : 00"
    bool = true
})
let buttonpause = document.getElementById("pause")
buttonpause.addEventListener("click", evt=>{
    timer.textContent = "Temps Restant : 05 : 00"
    bool = false
})

function rebour(){

    sec = sec-1
    if(bool === true){
        if(sec === 0){
            travail = travail -1
            sec = 60
        }
        if(travail < 10){
            if(sec < 10){
                timer.textContent = "Temps Restant : 0" + travail + " : 0" + sec
            }
            timer.textContent = "Temps Restant : 0" + travail + " : " + sec
        }else{
            timer.textContent = "Temps Restant : " + travail + " : " + sec
        }
        
        if(travail === -1){
            bool = false
            pause = 4
        }
    }
    if(bool === false){
        
        if(sec === 0){
            pause = pause -1
            sec = 60
        }
        if(sec < 10){
            timer.textContent = "Temps Restant : 0" + pause + " : 0" + sec
        }else{
            timer.textContent = "Temps Restant : 0" + pause + " : " + sec
        }
        timer.textContent = "Temps Restant : 0" + pause + " : " + sec
        if(pause === -1){
            bool = true
            travail = 24
        }
    }
    
}
let minuteur
let lance = document.getElementById("start")
lance.addEventListener("click", evt=> {
    if(minuteur == null){
        minuteur = setInterval(rebour,100)
    }
    if(bool === true){
        buttonpause.style.display = "none"
        buttontravail.style.display = "none"
    }
    if(bool === false){
        buttontravail.style.display = "none"
        buttonpause.style.display = "none"
    }
    
}) 
let relance = document.getElementById("restart")
relance.addEventListener("click", evt=> {
    location.reload()
}) 
