

const alfabeto = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25
}


function generica(mensagem, offSet) {

    const arrMsgNumber = mensagem.split('').map((letra) => {
        return alfabeto[letra] + offSet
    })

    const reverseAlfabet =  Object.entries(alfabeto).reduce((previousValue,currentValue)=>{
        
        previousValue[currentValue[1]] = currentValue[0]
        
        return previousValue
    },{})
   
    return reverseAlfabet
}


console.log(
    generica('ABA', 2)
    // array.length
)