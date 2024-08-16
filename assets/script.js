let dolar = 5.45

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.value = "1000.00"  // Corrigi aqui para usar o ponto decimal
convert("usd-to-brl")

// Funções
function formatCurrency(value) {
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if(isNaN(floatValue)) {  // Corrigi aqui para usar isNaN
        floatValue = 0
    }
    return floatValue
}

function convert(type) {
   if(type == "usd-to-brl") {  // Corrigi aqui para usar strings
        let fixedValue = fixValue(usdInput.value)

        let result = fixedValue * dolar
        result = result.toFixed(2)

        brlInput.value = formatCurrency(result)
   }

   if(type == "brl-to-usd") {  // Corrigi aqui para usar strings
        let fixedValue = fixValue(brlInput.value)

        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)
   }
}
