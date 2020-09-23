let temp = 0;
let compass = 0;
led.setBrightness(123);
input.onButtonPressed(Button.A, () => {
    while (true) {
        compass = input.compassHeading()
        if (compass > 315 || compass <= 45) {
            basic.showString("N")
        } else if (compass > 45 && compass < 135) {
            basic.showString("E")
        } else if (compass >= 135 && compass < 225) {
            basic.showString("S")
        } else if (compass >= 225 && compass <= 315) {
            basic.showString("W")
        }
    }
})
input.onButtonPressed(Button.B, () => {
    while (true) {
        temp = input.temperature() - 2;
        basic.showString("" + temp + "C");
        basic.pause(500);
        if (temp < 20) {
            for (let i = 0; i < 8; i++) {
                pins.analogWritePin(AnalogPin.P0, 600);
                basic.showLeds(`
                    . # . # .
                    # # . # #
                    . . # . .
                    # # . # #
                    . # . # .
                    `)
                basic.pause(250);
                basic.clearScreen();
                pins.digitalWritePin(DigitalPin.P0, 0);
                basic.pause(250);
            }
        }
    }
})
compass = input.compassHeading();
