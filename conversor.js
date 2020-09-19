function  somarValoresInteiros(texto1, texto2){
    const base = 10;
    let numero1 = parseInt(texto1,base);
    let numero2 = parseInt(texto2,base);
    return numero1 + numero2;
}

function  somarValoresDecimais(texto1,texto2){
    let numero1 = parseFloat(texto1);
    let numero2 = parseFloat(texto2);
    return numero1 + numero2;
}

module.exports = {
    somarValoresInteiros,
    somarValoresDecimais
}