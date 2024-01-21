const contador = document.querySelector(".contador")

const btnMenos = document.querySelector(".btnMenos")
const btnLimpar = document.querySelector(".btnLimpar")
const btnMais = document.querySelector(".btnMais")

/*Variavel para acumular os valores do contador*/
   let acumulador = 0

/*Função de incremento no valor do contador */
btnMais.addEventListener("click", function(e) {
   let classe =  e.currentTarget.classList
   
   if(classe.contains("btnMais")){
    acumulador += 1
   }

   if(acumulador > 0){
    contador.style.color = "green"     
   }
   contador.textContent = acumulador
})

/*Função de decremento no valor do contador */
btnMenos.addEventListener("click", function(e){
    let classe = e.currentTarget.classList

    if(classe.contains("btnMenos")){
        acumulador -= 1
    }
    
    if(acumulador < 0){
     contador.style.color = "red"
    }
    contador.textContent = acumulador
})

/*Função para resetar o valor do contador */
btnLimpar.addEventListener("click", function(e){
    let classe = e.currentTarget.classList

    if(classe.contains("btnLimpar")){
        acumulador = 0
        contador.style.color = "black"
    }    

    contador.textContent = acumulador
})

       
