function multiValues() { // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let multi = [];
    for (let row = 0; row <= 10; row++) {
        multi[row] = []
        for(let column = 0; column <= 10; column++){
            multi[row][column] = row * column
        }
    }
    return multi
}

console.table(multiValues())