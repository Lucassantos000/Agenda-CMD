/*vetor de meses*/
const arraymes = ['janeiro' , 'fevereiro', 'março', 'abril' , 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro' , 'novembro', 'dezembro'];

/*elemento eta para esquerda*/

var setaEsquerda = document.getElementById("esquerda");
var setaDireita = document.getElementById("direita");




/*valor do titulo do mes*/
var valor_mes = document.getElementById("mes");

/*valor do titulo da página*/
var dataHoje = document.getElementById("data_hj");


/*inserir a data de hoje no tpitulo*/
function setarData(dia, mes, ano){
    dataHoje.innerHTML = "Data atual: " + dia + "/" + mes + "/" + ano ;
    
    return `${dia}/${mes}/${ano}`;
}

//setar mes no calendário

function setarMesAtual(month, mes){

      
    valor_mes.innerHTML = "" + month[mes] ;
   
}




var data = new Date();
var dia = String(data.getDate()).padStart(2,'0');
var mes = String(data.getMonth()+1).padStart(2,'0');
var ano = data.getFullYear();

var mesInt = parseInt(mes)-1; // O menos 1 é porque o vetor começa do zero

/*
console.log(mes);
console.log(arraymes[mes])

console.log(dia);
console.log(mes);
console.log(ano);
*/

/*chamada de funções*/

setarData(dia, mes, ano);
setarMesAtual(arraymes, mesInt );



/*Incrementa o valor do mes*/

function incremento(){
 

        if(mesInt ===11){
            mesInt = 0;
            console.log(mesInt);
            return true;
        }

        mesInt = mesInt+1;
        console.log(mesInt);
        return true;
}


/*decrementa o valor do mes*/
function decremento(){
    

        if(mesInt === 0){
            mesInt = 11;
            console.log(mesInt);
            return true;
            
        }

        mesInt = mesInt-1;
        console.log(mesInt);
        return true;
}


//alteraMes(arraymes, mesInt);

function decMes(){
   
    let mes = document.getElementById("mes");

    

    decremento();

    console.log(mesInt);
    mes.innerHTML = arraymes[mesInt];
    
}


function incMes(){
    
    let mes = document.getElementById("mes");

    

    incremento();
    console.log(mesInt);
    mes.innerHTML = arraymes[mesInt];
}



setaEsquerda.addEventListener( 'click' , decMes );
setaDireita.addEventListener('click', incMes);
