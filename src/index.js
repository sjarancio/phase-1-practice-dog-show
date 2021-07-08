document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()

})

function fetchDogs(){
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(json => json.forEach(renderDogs))
}

function renderDogs(dogData){
    // console.log(dogData)
    // console.log(dogData.name)
    // let dogName = dogData.dogName
    // let dogBreed = dogData.dogBreed
    
    let tableRow = document.createElement('tr')
    let dogName = document.createElement('td')
    let dogBreed = document.createElement('td')
    let dogSex = document.createElement('td')
    dogName.className = 'doggy-name'
    dogBreed.className = 'doggy-breed'
    dogSex.className = 'doggy-sex'
    let buttonTd = document.createElement('td')
    let editButton = document.createElement('button')
    editButton.textContent = "Edit"
    buttonTd.append(editButton)
    dogName.textContent = dogData.name 
    dogBreed.textContent = dogData.breed 
    dogSex.textContent = dogData.sex 
    // console.log(dogBreed)
    tableRow.append(dogName, dogBreed, dogSex, buttonTd)
    let wholeTable = document.querySelector('table')
    wholeTable.append(tableRow)
    console.log(wholeTable)
    // console.log(tableRow)
    // console.log(editButton)
    editButton.addEventListener('click', (e) => {
        // console.log(e.target.parentNode.parentNode.querySelector('.doggy-sex').innerText)
        let formName = document.querySelector('#d-name')
        let formBreed = document.querySelector('#d-breed')
        let formSex = document.querySelector('#d-sex')
        formName.value = e.target.parentNode.parentNode.querySelector('.doggy-name').innerText
        formBreed.value = e.target.parentNode.parentNode.querySelector('.doggy-breed').innerText
        formSex.value = e.target.parentNode.parentNode.querySelector('.doggy-sex').innerText
        // console.log(formName)
        
    })




}

// function editEvent{
    
// }