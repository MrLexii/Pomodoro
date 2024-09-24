let timer = document.getElementById("timer")

let travail = 24
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
        timer.textContent = "Temps Restant : " + travail + " : " + sec
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
        timer.textContent = "Temps Restant : " + pause + " : " + sec
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
        minuteur = setInterval(rebour,10)
    }
}) 
let relance = document.getElementById("restart")
relance.addEventListener("click", evt=> {
    location.reload()
}) 
