const form = document.querySelector(".enviar")

form.addEventListener('submit',function(evente){
evente.preventDefault();
    const inputPeso = evente.target.querySelector("#peso")
    const inputAltura = evente.target.querySelector("#altura")

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        resultado("Peso invalido",false)
        return;
    }
    if(!altura){
        resultado("Altura invalido",false)
        return;
    }
    const imc = getImc(peso,altura);
    const nivelImc = getGraul(imc);
    const msg =`Seu IMC é  ${imc} ${nivelImc}`
    resultado(msg,true)
})

function getGraul(imc){
    const nivel = ["Abaixo do peso","Normal","sobrepeso","Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]
    if(imc < 18.5){
        return nivel[0];

    }
    if(imc > 18.5 && imc < 24.9){
        return nivel[1];
    }
    if(imc > 25 && imc < 29.9){
        return nivel[2];
    } 
    if(imc > 30 && imc < 34.9){
         return nivel[3];
    }
     if(imc > 35 && imc < 39.9){
           return nivel[4]; 
    }
    if(imc > 40){
            return nivel[5];
    }
}

function getImc(peso,altura){
    const resultado = peso / (altura * altura)
   return resultado;
}
function criaP(){
    const p = document.createElement('p')
    return p;
}

function resultado(msg,isValid){
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML =''

const p = criaP();

if(isValid){
    p.classList.add("paragrafo")
}else{
    p.classList.add("bad")
}

    p.innerHTML = msg;
    resultado.appendChild(p);
}
