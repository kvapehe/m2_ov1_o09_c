input.onButtonPressed(Button.A, function () {
    tall += 1
})
let tall = 0
basic.showNumber(tall)
basic.forever(function () {
    tall = tall % 10
    basic.showNumber(tall)
})
