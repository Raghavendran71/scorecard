

let homeSc = document.getElementById("home")
console.log(homeSc)

let awaySc = document.getElementById("away")

homeSc.textContent = 0
awaySc.textContent = 0
let scoreh = 0
let scorea = 0



function plusoneh() {
   scoreh += 1
   homeSc.textContent = scoreh
    
    
}

function plustwoh() {
    
   scoreh += 2
   homeSc.textContent = scoreh
    
}

function plusthreeh() {
    
    scoreh += 3
   homeSc.textContent = scoreh
       
    
}

function plusonea() {
   scorea += 1
   awaySc.textContent = scorea
    
    
}

function plustwoa() {
    
   scorea += 2
   awaySc.textContent = scorea
    
}

function plusthreea() {
    
    scorea += 3
  awaySc.textContent = scorea
          
}