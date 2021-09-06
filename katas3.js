const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function criarElementos (resu){
    const body = document.getElementById('bloco_Resu')
    const paragraph = document.createElement('p')
    paragraph.innerText = resu
    body.appendChild(paragraph)
    return 
}


function kata1(num) {
    // implemente o código do kata 1 aqui
    let resu = []
    for(let i = 1 ; i <= num ; i++){
        resu. push(i)
    }
    criarElementos(resu)
    return resu
}
    kata1(25)

function kata2(num) {
    // implemente o código do kata 2 
    let resu = []
    for(let i = num ; i >= 1 ; i -= 1){
       
            resu.push(i)

    }
    criarElementos(resu)
    return resu
}
   kata2(25)

function kata3(num) {
    // implemente o código do kata 3 aqui
    let resu = []
    num = num * -1
    for(let i = -1 ; i >= num ; i--){
       
        resu.push(i)

}
    criarElementos(resu)
    return resu
}
    kata3(25)

function kata4(num) {
    // implemente o código do kata 4 aqui
    let resu = []
    num = num * -1
    for(let i = num ; i < 0 ; i += 1){
       
        resu.push(i)

}
    criarElementos(resu)
    return resu
}
    kata4(25)

function kata5(num) {
    // implemente o código do kata 5 aqui
    let resu = []
    num = num * -1
    for(let i = (num * -1) ; i >= num; i--){
        if(i % 2 !== 0){
            resu.push(i)
        }
           
    }
    criarElementos(resu)
    return resu
}
    kata5(25)

function kata6(num) {
    // implemente o código do kata 6 aqui
    let resu = []
    for(let i = 1 ; i <= num ; i++){
        if (i % 3 == 0){
            resu.push(i)
        }
      
    }
    criarElementos(resu)

    return resu
}
    kata6(100)

function kata7(num) {
    // implemente o código do kata 7 aqui
    let resu = []
    for(let i = 1 ; i <= num; i++){
        if (i % 7 == 0){
            resu.push(i)
        }
    }
    criarElementos(resu)
    return resu
}
    kata7(100)
function kata8(num) {
    // implemente o código do kata 8 aqui
    let resu = []
   
    for(let i = num ; i >= 1; i -= 1){
        if((i % 3 == 0) || (i % 7 == 0)){
            resu.push(i)
        }
    }
    criarElementos(resu)
    return resu
}
    kata8(100)
function kata9(num) {
    // implemente o código do kata 9 aqui
    let resu = []
    for(let i = 1 ; i <= num; i++){
        if (i % 5 == 0 && i % 2 !== 0){
            resu.push(i)
        }
    }
    criarElementos(resu)
    return resu
}
 kata9(100)
function kata10(num) {
    // implemente o código do kata 10 aqui
    let resu = []
    for(let i = 0 ; i < num; i++){
        
            resu.push(sampleArray[i])
        
    }
    criarElementos(resu)
    return resu
}
    kata10(20)
function kata11() {
    // implemente o código do kata 11 aqui
    let resu = []
    for(let i = 0 ; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 == 0){
            resu.push(sampleArray[i])
        }
    
        
    }
    criarElementos(resu)
    return resu
}
    kata11()
function kata12() {
    // implemente o código do kata 12 aqui
    let resu = []
    for(let i = 0 ; i <= sampleArray.length; i++){
            if(sampleArray[i] % 2 !== 0){
            resu.push(sampleArray[i])
        }
    }
    criarElementos(resu)
    return resu
}
    kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    let resu = []
    for(let i = 0 ; i <= sampleArray.length; i++){
        if(sampleArray[i] % 8 == 0){
            resu.push(sampleArray[i])
        }
    }
    criarElementos(resu)
    return resu
}
    kata13()

function kata14() {
    // implemente o código do kata 14 aqui
    let resu = []
    for(let i = 0 ; i < sampleArray.length; i++){
        
            resu.push(sampleArray[i] * sampleArray[i])
        
    }
    criarElementos(resu)
    return resu
}
    kata14()

function kata15() {
    // implemente o código do kata 15 aqui
    let resu = 0 
    let b = 1
    for(let i = 1 ; i < 20; i++){
         
            resu = b + (i + 1)
            b = resu
    }
    criarElementos(resu)
    return resu
}
    kata15()

function kata16() {
    // implemente o código do kata 16 aqui
    let resu = 0 
    let b = sampleArray[0]
    for(let i = 0 ; i < sampleArray.length -1; i++){
         
            resu = b + sampleArray[i+1]
            b = resu
    }
    criarElementos(resu)
    return resu
}
    kata16()

function kata17() {
    // implemente o código do kata 17 aqui
    let resu = sampleArray [0]

    for(let i = 0 ; i <= sampleArray.length -1; i++){
        for(let b = 0 ; b < sampleArray.length -1; b++){
            if(sampleArray[i] < sampleArray[b] && sampleArray[i] < resu){
                resu = sampleArray[i]
            }
            else if(sampleArray[b] < sampleArray[i] && sampleArray[b] < resu){
                resu = sampleArray[b]
            }
        }
    }
    criarElementos(resu)
    return resu
}
    kata17()
function kata18() {
    // implemente o código do kata 18 aqui
    let resu = sampleArray [0]
    
    for(let i = 0 ; i <= sampleArray.length -1; i++){
        for(let b = 0 ; b < sampleArray.length -1; b++){
            if(sampleArray[i] > sampleArray[b] && sampleArray[i] > resu){
                resu = sampleArray[i]
            }
            else if(sampleArray[b] > sampleArray[i] && sampleArray[b] > resu){
                resu = sampleArray[b]
            }
        }
    }
    criarElementos(resu)
    return resu
}
    kata18()
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
