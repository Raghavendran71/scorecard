

let homeSc = document.getElementById("home")
console.log(homeSc)

let awaySc = document.getElementById("away")

homeSc.textContent = 0
awaySc.textContent = 0
let scoreh = 0
let scorea = 0



function plusone1() {
   scoreh += 1
   homeSc.textContent = scoreh
    
    
}

function plustwo1() {
    
   scoreh += 2
   homeSc.textContent = scoreh
    
}

function plusthree1() {
    
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