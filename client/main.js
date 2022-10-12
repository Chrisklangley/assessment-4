// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune")
const mirrorForm = document.getElementById('mirror-form')
const mirrorInput = document.querySelector('input')
const section = document.querySelector('section')
const todoListForm = document.querySelector('#to-do-form')
const todoInput = document.querySelector('#to-doInput')
const selectItems = document.querySelector('select')
const coinTossBtn = document.querySelector('.coin-toss')
const signupForm = document.getElementById('signup')
const profile = document.getElementById('profile')
const getPokemon = document.getElementById('getpokemon')
const deleteBtn = document.getElementById('deletepokemon')

const deletepokemon = ()=>{
    axios.delete('http://localhost:4000/api/deletepokemon')
    .then(res => {
        console.log(res.data)
    })

}


const showPokemon = () => {
    axios.get('http://localhost:4000/api/getpokemon')
    .then(res => {
        const  pokemon = res.data
        pokemon.forEach(pokemon => { 
            const plist = document.createElement('li')
            plist.textContent = pokemon
            const list = document.querySelector('ol')
            // list.innerHTML = ''
               list.appendChild(plist)
               
            }  );         

    })
}



const sighmeUp = (event) =>{
    event.preventDefault();
    const firstname = document.querySelector('.firstName').value
    const lastname = document.querySelector('.lastName').value
    const photO = document.querySelector('.photo').value

    // console.log({firstname, lastname, photO})
   
    body = {
        firstname,
        lastname,
        photO
    }
    

    axios.post('http://localhost:4000/api/sign-up', body)
    .then((res) => {  
    const { firstname, lastname, photo } = res.data
    const heading = document.createElement('h2')
    heading.innerText = `${firstname} ${lastname}`
     profile.appendChild(heading)
    const profilePhoto = document.createElement('img')
    heading.appendChild(profilePhoto)
    profilePhoto.setAttribute(photo)


    })
    .catch((err) => console.log(err))

}

const coinFilp = () => {
    axios.get('http://localhost:4000/api/filp')
    .then((res) =>{
        const result = res.data
        alert(result)
    })
}

const toDoList = (event) =>{
    
         body = {
         todoItem:todoInput.value
}
event.preventDefault()
axios.post('http://localhost:4000/api/todolist', body)
.then((res)=> {
    const optionElement = document.createElement('option')
    optionElement.innerText = res.data
    selectItems.appendChild(optionElement)

})
.catch((err) => console.log(err))
}

const truthMirror =(event)=>{
    event.preventDefault();
    body = {
        truth: mirrorInput.value
    }
    axios.post('http://localhost:4000/api/mirror', body)
    .then((res) => {
    const responseEl = document.createElement('p')
    responseEl.textContent = res.data
    section.innerHTML = ""
    section.appendChild(responseEl)

    })
    .catch((err)=> console.log(err))
}

const whatsMyFortune = () => {
    
    axios.get('http://localhost:4000/api/fortune')
    .then(res => {
        const data = res.data
        alert(data);
    })
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

mirrorForm.addEventListener('submit',truthMirror )
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',whatsMyFortune)
todoListForm.addEventListener('submit', toDoList)
coinTossBtn.addEventListener('click', coinFilp)
signupForm.addEventListener('submit', sighmeUp)
getPokemon.addEventListener('click', showPokemon )
deleteBtn.addEventListener('click', deletepokemon)