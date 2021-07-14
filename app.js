// console.log("The first console log")

// fetch("https://dog.ceo/api/breeds/image/random")
// .then( response => response.json())
// .then(data => console.log(data))

// console.log("The second console log")

// for (let i = 0; i < 100; i++) {
//     console.log("third log")
// }

// let dogImg = document.querySelector(".pet-image")

// fetch("https://dog.ceo/api/breeds/image/random")
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//     dogImg.innerHTML = `
//     <img src="${data.message}" />`
// })

let activityElement = document.querySelector(".activity-container")
let getBtn = document.querySelector(".get-button")

getBtn.addEventListener("click", function (){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        activityElement.textContent =`"${data.activity}"`
    })
})



