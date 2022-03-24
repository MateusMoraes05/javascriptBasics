let allValueByUser = []
let sumOfNumbers = 0
let dataString = ""
let lastArrayLenght = 0

function catchDataAndCalculate() {
    if (document.getElementById("txtNumeros").value != "") {
        let usualData = parseInt(document.getElementById("txtNumeros").value)
        allValueByUser.push(usualData)
        for (let i = 0; i <= allValueByUser.length - 1; i++) {
            sumOfNumbers = sumOfNumbers + allValueByUser[i]
        }
        document.querySelector("h2").innerHTML = `Média: ${sumOfNumbers / allValueByUser.length}`
        walkThroughArray(usualData)
        sumOfNumbers = 0

    }
}

function cleanData() {
    document.querySelector("h2").innerHTML = "Média: "
    sumOfNumbers = 0
    for (let k = allValueByUser.length - 1; k >= 0; k--) {
        allValueByUser.pop()
    }
    document.getElementById("txtNumeros").value = ""
    console.log(allValueByUser)
}

function walkThroughArray(lastNum) {
    let usualString = document.querySelector("h3").innerHTML
    if(dataString == "") {
        dataString = `${lastNum}`
    }
    else {
        dataString = `${usualString}, ${lastNum}`
    }
    
    document.querySelector("h3").innerHTML = `${dataString}`
}