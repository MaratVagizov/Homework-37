let top_speed = document.querySelector('.top-speed')
let bot_speed = document.querySelector('.bot-speed')

    top_speed.onclick = () => {
        let speed = document.querySelector('.speed').innerHTML
        let range = document.querySelector('.black-big').innerHTML
        if (speed <= "70") {
            document.querySelector('.speed').innerHTML = `${parseInt(speed) + 5} миль/ч`
            document.querySelector('.black-big').innerHTML = `${parseInt(range) - 20} миль`
            document.querySelector('.black-big-2').innerHTML = `${parseInt(range) - 20} миль`
        }
    }

    bot_speed.onclick = () => {
        let speed = document.querySelector('.speed').innerHTML
        let range = document.querySelector('.black-big').innerHTML
        if (speed >= "50") {
            document.querySelector('.speed').innerHTML = `${parseInt(speed) - 5} миль/ч`
            document.querySelector('.black-big').innerHTML = `${parseInt(range) + 20} миль`
            document.querySelector('.black-big-2').innerHTML = `${parseInt(range) + 20} миль`
        }
    }

    let top_temperature = document.querySelector('.top-temperature')
    let bot_temperature = document.querySelector('.bot-temperature')

    top_temperature.onclick = () => {
        let temperature = document.querySelector('.temperature').innerHTML
        let range = document.querySelector('.black-big').innerHTML
        if (temperature <= "40") {
            if (temperature > "20") {
                document.querySelector('.temperature').innerHTML = `${parseInt(temperature) + 10}°`
                document.querySelector('.black-big').innerHTML = `${parseInt(range) - 20} миль`
                document.querySelector('.black-big-2').innerHTML = `${parseInt(range) - 20} миль`
            }
            else if (temperature < "20") {
                document.querySelector('.temperature').innerHTML = `${parseInt(temperature) + 10}°`
                document.querySelector('.black-big').innerHTML = `${parseInt(range) + 20} миль`
                document.querySelector('.black-big-2').innerHTML = `${parseInt(range) + 20} миль`
            }
        }
    }

    bot_temperature.onclick = () => {
        let temperature = document.querySelector('.temperature').innerHTML
        let range = document.querySelector('.black-big').innerHTML
        if (temperature >= "0") {
            if (temperature > "21") {
                document.querySelector('.temperature').innerHTML = `${parseInt(temperature) - 10}°`
                document.querySelector('.black-big').innerHTML = `${parseInt(range) + 20} миль`
                document.querySelector('.black-big-2').innerHTML = `${parseInt(range) + 20} миль`
            }
            else {
                document.querySelector('.temperature').innerHTML = `${parseInt(temperature) - 10}°`
                document.querySelector('.black-big').innerHTML = `${parseInt(range) - 20} миль`
                document.querySelector('.black-big-2').innerHTML = `${parseInt(range) - 20} миль`
            }
        }
    }

    let top_wheel = document.querySelector('.top-wheel')
    let bot_wheel = document.querySelector('.bot-wheel')

    let  wheel_19_1 = document.querySelector('.wheel-19-1')
    let  wheel_19_2 = document.querySelector('.wheel-19-2')
    let  wheel_21_1 = document.querySelector('.wheel-21-1')
    let  wheel_21_2 = document.querySelector('.wheel-21-2')

    top_wheel.onclick = () => {
        let wheel = document.querySelector('.wheel').innerHTML
        let range = document.querySelector('.black-big').innerHTML
        if (wheel < "21") {
            document.querySelector('.wheel').innerHTML = `${parseInt(wheel) + 2}`
            document.querySelector('.black-big').innerHTML = `${parseInt(range) - 5} миль`
            document.querySelector('.black-big-2').innerHTML = `${parseInt(range) - 5} миль`
            wheel_19_1.style.display = 'none'
            wheel_19_2.style.display = 'none'
            wheel_21_1.style.display = 'block'
            wheel_21_2.style.display = 'block'
        }
    }

    bot_wheel.onclick = () => {
        let wheel = document.querySelector('.wheel').innerHTML
        let range = document.querySelector('.black-big').innerHTML
        if (wheel > "19") {
            document.querySelector('.wheel').innerHTML = `${parseInt(wheel) - 2}`
            document.querySelector('.black-big').innerHTML = `${parseInt(range) + 5} миль`
            document.querySelector('.black-big-2').innerHTML = `${parseInt(range) + 5} миль`
            wheel_19_1.style.display = 'block'
            wheel_19_2.style.display = 'block'
            wheel_21_1.style.display = 'none'
            wheel_21_2.style.display = 'none'
        }
    }

let interiors = {
    b: "./img/21.png",
    w: "./img/22.png",
    p: "./img/23.png",

}

let circles = document.querySelectorAll('.circle')
let img = document.querySelector('.img-2')

let btn_black = document.querySelector('.black')
let btn_white = document.querySelector('.white')
let btn_pink = document.querySelector('.pink')

circles.forEach(btn => {
    btn.onclick = () => {
        let key = btn.innerHTML
        img.src = interiors[key]
        // btn.style.border = "3px solid red"
        // btn.classList.add('active')
        // btn.classList.remove('active')
        
    }
});

// btn_black.onclick = () => {
//     let key = btn_black.innerHTML
//     console.log(key);
//     img.setAttribute('src', interiors[key])
// }

// btn_white.onclick = () => {
//     let key = btn_white.innerHTML
//     console.log(key);
//     img.setAttribute('src', interiors[key])
// }

// btn_pink.onclick = () => {
//     let key = btn_pink.innerHTML
//     console.log(key);
//     img.setAttribute('src', interiors[key])
// }


// let img = document.querySelector('.img-2')
// let btn_black = document.querySelector('.black')
// let btn_white = document.querySelector('.white')
// let btn_pink = document.querySelector('.pink')

// btn_black.onclick = () => {
//     btn_white.classList.remove('active')
//     btn_pink.classList.remove('active')
//     btn_black.classList.add('active')
// }
// btn_white.onclick = () => {
//     btn_black.classList.remove('active')
//     btn_pink.classList.remove('active')
//     btn_white.classList.add('active')
// }
// btn_pink.onclick = () => {
//     btn_black.classList.remove('active')
//     btn_white.classList.remove('active')
//     btn_pink.classList.add('active')
// }