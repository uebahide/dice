input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showNumber(counter)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (4 < counter) {
        basic.showIcon(IconNames.Heart)
        you_win = true
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(counter)
    if (you_win == false) {
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    random = randint(0, 2)
    if (you_win == false) {
        if (random == 0) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # . # #
                . # # # .
                . . # . .
                `)
        } else if (random == 1) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if (random == 2) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
let random = 0
let you_win = false
let counter = 0
counter = 0
you_win = false
