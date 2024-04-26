//SUM OF RESISTORS IN SERIES
let ejemplo1 = [-1,5,6,3];
let ejemplo2 = [14,3.5,6];
let ejemplo3 = [8,15,100];

function sumaElementos(elemento) {
    let suma = 0;
    for(let i = 0; i < elemento.length; i++){
        suma += Math.abs(elemento[i]);
    }
    return suma;  
} 

console.log(sumaElementos(ejemplo1))
console.log(sumaElementos(ejemplo2))
console.log(sumaElementos(ejemplo3))

//NUMBER HALVES:
const n = 4;
const n2 = 10;

function numDiv(num){
    let res =[];
    const half = num/2;
    res.push(half);
    res.push(half);
    return res;
}
console.log(numDiv(n));
console.log(numDiv(n2));

//SOCIEDAD SECRETA
/* - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/

const member1 = ["Esperanza", "Franco", "Nia"];
const member2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const member3 = ['Harry', 'Ron', 'Hermione'];

function secretName(arr){
    emptyArr = [];
    //console.log(arr);
    arr.forEach((e) => emptyArr.push(e.charAt(0)));
    return emptyArr.sort().join("");

}

console.log(secretName(member1));
console.log(secretName(member2));
console.log(secretName(member3));

//Online status

let usuarios = ['mockIng99', 'J0eyPunch', 'glassedFer'];
i=0;
array=[];

while (i <=1){
    array.push(usuarios[i]);
    i++;   
}
//console.log(array)
if (usuarios.length >= 3){
    remainingUsers = usuarios.length - 2
    console.log(`${array[0]} , ${array[1]} and ${remainingUsers} more online`);
}

//ARRAY OF MULTIPLES
/*-`arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.*/


function arrayMultiplos(numero1, multiplicador){
    let listaNum = [];
    for (i= 1; i <= multiplicador; i++){
        listaNum.push(i*numero1);
        //console.log(listaNum);
    }
    return listaNum;
}

console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));

//POSITIVE DOMINANCE ARRAY
let numList = [-1, -3, -5, 4, 6767];

function isPositive(arr) {
    let listaPositivos = 0;
    let mitad = arr.length/2;
    //console.log(mitad);
    for (i= 0; i <= arr.length; i++) {
        
        if (arr[i] > 0) {            
            listaPositivos = listaPositivos+1; 
            //console.log(arr[i]);
        }
    }
    //console.log(listaPositivos)
    return listaPositivos > mitad;
}

console.log(isPositive(numList));

//ANTIPODAL AVERAGE
//For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
let antipodal = [1,2,3,5,22,6];

function antipodalAverage(arr){
    let posMediana = arr.length/2;
    //console.log(posMediana);
    let reverseHalf = [];
    let firstHalf = [];
    let otherHalf = [];
    let posAEliminar;
    let newArr = [];
    if(arr.length%2 != 0){
        //console.log("impar")
        posAEliminar = posMediana - 0.5
        arr.splice(posAEliminar,1);
        console.log(arr);
        let posMediana1 = arr.length/2;
        for (i=0; i <= arr.length-1; i++) {
        
            if (i < posMediana1){
                firstHalf.push(arr[i]);
                //console.log(firstHalf);
            } else {
                otherHalf.push(arr[i]);
                //console.log(otherHalf);
            }
            }
            reverseHalf = otherHalf.reverse();
            //console.log(reverseHalf)
            let r = [];
            for(i = 0; i < firstHalf.length; i++){
                r[i] =firstHalf[i]+reverseHalf[i];
            }
            //console.log(r);
            let divididos = [];
            for(i=0; i < r.length; i++){
                divididos.push(r[i]/2);
            //console.log(divididos);
            }
        return divididos;

    } else { 
        for (i=0; i <= arr.length-1; i++) {
        
        if (i < posMediana){
            firstHalf.push(arr[i]);
            //console.log(firstHalf);
        } else {
            otherHalf.push(arr[i]);
            //console.log(otherHalf);
        }
        }
        reverseHalf = otherHalf.reverse();
        //console.log(reverseHalf)
        let r = [];
        for(i = 0; i < firstHalf.length; i++){
            r[i] =firstHalf[i]+reverseHalf[i];
        }
        //console.log(r);
        let divididos = [];
        for(i=0; i < r.length; i++){
            divididos.push(r[i]/2);
       // console.log(divididos);
        }
    return divididos;
    }

}


console.log(antipodalAverage(antipodal));