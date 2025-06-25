/* 
* A função de pesquisa binária precisa
* receber um array ordenado.
*/

const binarySearch = (lista, item) => {
    let baixo = 0                //índice inicial
    let alto = lista.length - 1; //índice final

    while (baixo <= alto) { 
        const meio = Math.floor((baixo + alto) / 2);
        if (lista[meio] === item) return meio;
        if (lista[meio] > item) alto = meio - 1;
        else baixo = meio + 1;
    }

    return null;
};