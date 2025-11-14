input.onButtonPressed(Button.A, function () {
    basic.showNumber(Pas)
    basic.pause(1000)
    if (Pas > 20) {
        basic.showString("Il fait chaud! Boire de l'eau!")
    } else {
        basic.showString("!")
    }
})
input.onButtonPressed(Button.AB, function () {
    Pas = 0
    Distance = 0
    basic.showString(" Tous les valeurs sont réinitialisés ")
})
input.onButtonPressed(Button.B, function () {
    Distance = Pas * 0.6
    basic.showString("" + Distance + "mètres")
})
input.onGesture(Gesture.Shake, function () {
    Pas += 2
})
let Pas = 0
let Distance = 0
Distance = 0
Pas = 0
