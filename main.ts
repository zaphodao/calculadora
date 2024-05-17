input.onButtonPressed(Button.A, function () {
    número_que_vai_ser_calculado = randint(-1000000, 1000000)
    basic.showNumber(número_que_vai_ser_calculado)
})
input.onButtonPressed(Button.AB, function () {
    if (operação == 1) {
        basic.showNumber(0)
    } else if (operação == 2) {
        basic.showNumber(0)
    } else if (operação == 3) {
        basic.showNumber(0)
    } else if (operação == 4) {
        basic.showNumber(0)
    } else {
        basic.showNumber(0)
    }
})
input.onButtonPressed(Button.B, function () {
    número_que_vai_calcular = randint(-1000000, 1000000)
    basic.showNumber(número_que_vai_calcular)
})
let número_que_vai_calcular = 0
let número_que_vai_ser_calculado = 0
let operação = 0
operação = operação + 1
basic.showString("" + (operação))
if (operação == 1) {
    basic.showString("adição")
} else if (operação == 2) {
    basic.showString("subtração")
} else if (operação == 3) {
    basic.showString("multiplicação")
} else if (operação == 4) {
    basic.showString("divisão")
} else if (operação == 5) {
    basic.showString("raiz quadrada")
} else {
    operação = 0
    basic.showString("nenhuma")
}
