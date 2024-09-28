let timer = document.getElementById("timer")
/*
Cette partie permet d'initialiser les valeurs du timer pour les minutes (travail ou pause) et les secondes 
Ainsi qu'un bon pour le switch entre le travail et la pause.
*/
let travail = 24
let pause = 4
let sec = 60
let bool = true

/*Cette ligne permet de lier le HTML et le JavaScript pour la progression bar.*/
const circularProgress = document.querySelectorAll("#bar");

/*Les deux let sont les listener pour que l'utilisateur puisse choisir entre travail ou pause pour le départ.*/
let buttontravail = document.getElementById("travail")
buttontravail.addEventListener("click", evt => {
    main.style.background = "rgb(205, 17, 17)"
    timer.textContent = "Temps Restant : 25 : 00"
    bool = true
})
let buttonpause = document.getElementById("pause")
buttonpause.addEventListener("click", evt => {
    main.style.background = "green"
    timer.textContent = "Temps Restant : 05 : 00"
    bool = false
})

let main = document.getElementById("principal")



/*La fonction ci-dessous permet de faire le décompte du timer et le switch auto entre travail et pause.*/
function rebour() {

    sec = sec - 1
    if (bool === true) {
        main.style.background = "rgb(205, 17, 17)"
        if (sec === 0) {
            travail = travail - 1
            sec = 60
        }
        if (travail < 10) {
            if (sec < 10) {
                timer.textContent = "Temps Restant : 0" + travail + " : 0" + sec
            } else {
                timer.textContent = "Temps Restant : 0" + travail + " : " + sec
            }
        } else {
            if (sec < 10) {
                timer.textContent = "Temps Restant : " + travail + " : 0" + sec
            }
            else {
                timer.textContent = "Temps Restant : " + travail + " : " + sec
            }
        }

        if (travail === -1) {
            bool = false
            pause = 4
            Array.from(circularProgress).forEach((progressBar) => {
                const progressValue = progressBar.querySelector("#percentage")
                const innerCircle = progressBar.querySelector("#cercle")
                let startValue = 0,
                    endValue = Number(100),
                    progressColor = progressBar.getAttribute("data-progress-color")

                const progress = setInterval(() => {
                    startValue++
                    progressValue.textContent = `${startValue}%`
                    progressValue.style.color = `${progressColor}`

                    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
                        "data-inner-circle-color"
                    )}`

                    progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
                        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`
                    if (startValue === endValue) {
                        clearInterval(progress)
                    }
                }, 3000)
            })
        }
    }
    if (bool === false) {
        main.style.background = "green"
        if (sec === 0) {
            pause = pause - 1
            sec = 60
        }
        if (sec < 10) {
            timer.textContent = "Temps Restant : 0" + pause + " : 0" + sec
        } else {
            timer.textContent = "Temps Restant : 0" + pause + " : " + sec
        }
        if (pause === -1) {
            bool = true
            travail = 24
            Array.from(circularProgress).forEach((progressBar) => {
                const progressValue = progressBar.querySelector("#percentage")
                const innerCircle = progressBar.querySelector("#cercle")
                endValue = Number(100),
                    progressColor = progressBar.getAttribute("data-progress-color")
                let startValue = 0
                const progress = setInterval(() => {
                    startValue++
                    progressValue.textContent = `${startValue}%`
                    progressValue.style.color = `${progressColor}`

                    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
                        "data-inner-circle-color"
                    )}`

                    progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
                        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`
                    if (startValue === endValue) {
                        clearInterval(progress)
                    }
                }, 15000)
            })
        }
    }

}

/*Nous avons ici les listener pour les boutons de lancement et de relance, ainsi que la fonction de la progressBar.*/
let minuteur

let lance = document.getElementById("start")
lance.addEventListener("click", evt => {
    if (minuteur == null) {
        minuteur = setInterval(rebour, 1000)
        /*Les deux Array permettent de réinitialiser et d'utiliser la progressBar dans l'affichage en fonction de si on travaille ou si on est en pause.*/
        if (bool === true) {
            Array.from(circularProgress).forEach((progressBar) => {
                const progressValue = progressBar.querySelector("#percentage")
                const innerCircle = progressBar.querySelector("#cercle")
                endValue = Number(100),
                    progressColor = progressBar.getAttribute("data-progress-color")
                let startValue = 0
                const progress = setInterval(() => {
                    startValue++
                    progressValue.textContent = `${startValue}%`
                    progressValue.style.color = `${progressColor}`

                    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
                        "data-inner-circle-color"
                    )}`

                    progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
                        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`
                    if (startValue === endValue) {
                        clearInterval(progress)
                    }
                }, 15000)
            })
        }
        if (bool === false) {
            Array.from(circularProgress).forEach((progressBar) => {
                const progressValue = progressBar.querySelector("#percentage")
                const innerCircle = progressBar.querySelector("#cercle")
                let startValue = 0,
                    endValue = Number(100),
                    progressColor = progressBar.getAttribute("data-progress-color")

                const progress = setInterval(() => {
                    startValue++
                    progressValue.textContent = `${startValue}%`
                    progressValue.style.color = `${progressColor}`

                    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
                        "data-inner-circle-color"
                    )}`

                    progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
                        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`
                    if (startValue === endValue) {
                        clearInterval(progress)
                    }
                }, 3000)
            })
        }
    }
    if (bool === true) {
        buttonpause.style.display = "none"
        buttontravail.style.display = "none"
    }
    if (bool === false) {
        buttontravail.style.display = "none"
        buttonpause.style.display = "none"
    }

})
let relance = document.getElementById("restart")
relance.addEventListener("click", evt => {
    location.reload()
}) 
