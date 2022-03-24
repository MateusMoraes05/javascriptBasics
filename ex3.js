let NumbersGivenByUser = []
let biggestNumber 

function main() {
    if (NumbersGivenByUser.length == 5) {
        document.getElementById("txtNumeros").value = ""
        document.getElementById("txtNumeros").disabled = true
        document.querySelector("button").style.opacity = 0
        document.getElementById("txtNumeros").placeholder = `Veja os Resultados`
        checkNumbers()
    }
    else {
        document.getElementById("txtNumeros").value = ""
        document.getElementById("txtNumeros").placeholder = `Digite o ${NumbersGivenByUser.length + 1}º valor`
    }
    console.log(NumbersGivenByUser)
}

function catchNumbers() {
    if (NumbersGivenByUser.length < 5) {
        NumbersGivenByUser.push(parseInt(document.getElementById("txtNumeros").value))
        main()
    }
}

function checkNumbers() {
    biggestNumber = NumbersGivenByUser[0]
    for(let i=0;i<=NumbersGivenByUser.length-1;i++){
        if(NumbersGivenByUser[i]>biggestNumber){
            biggestNumber = NumbersGivenByUser[i]
        }
    }
    document.getElementById("output--0").innerHTML = `Maior número: ${biggestNumber}`
}

function restartNumbers() {
    document.getElementById("txtNumeros").disabled = false
    document.getElementById("txtNumeros").placeholder = ``
    document.querySelector("button").style.opacity = 1
    document.getElementById("output--0").innerHTML = ""
    for(let k=NumbersGivenByUser.length -1;k>=0; k--){
        NumbersGivenByUser.pop()
    }
    console.clear()
    main()
}

main()