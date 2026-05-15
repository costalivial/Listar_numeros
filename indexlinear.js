function buscaLinear(array, alvo) {
    for (let i=0; i< array.length; i++) {
            if(array[i]===alvo){
                return i;
            }
    }
    return -1;
}

const lista = [10, 50, 30, 70, 80, 20];
console.log (buscaLinear(lista,80));
console.log(buscaLinear(lista,20));