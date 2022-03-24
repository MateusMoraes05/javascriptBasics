let NumbersGivenByUser = []
let NumbersAfterPower = []

function main() {
    if (NumbersGivenByUser.length == 5) {
        document.getElementById("txtNumeros").value = ""
        document.getElementById("txtNumeros").disabled = true
        document.querySelector("button").style.opacity = 0
        document.getElementById("txtNumeros").placeholder = `Veja os Resultados`
        calculatePower()
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

function calculatePower() {
    for (let i = 0; i <= NumbersGivenByUser.length - 1; i++) {
        NumbersAfterPower.push(NumbersGivenByUser[i] ** 2)
    }
    document.getElementById("output--1").innerHTML = `Numeros inseridos: ${NumbersGivenByUser}`
    document.getElementById("output--0").innerHTML = `Numeros ao ²: ${NumbersAfterPower}`
}

function restartNumbers() {
    document.getElementById("txtNumeros").disabled = false
    document.querySelector("button").style.opacity = 1
    document.getElementById("output--1").innerHTML = ""
    document.getElementById("output--0").innerHTML = ""
    for(let k=NumbersGivenByUser.length -1;k>=0; k--){
        NumbersAfterPower.pop()
        NumbersGivenByUser.pop()
    }
    console.clear()
    main()
}

main()