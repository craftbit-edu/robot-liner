input.onButtonPressed(Button.A, function () {
    wuKong.mecanumStop()
})
// POČÁTEČNÍ NASTAVENÍ
radio.setGroup(10)
basic.showIcon(IconNames.Angry)
let REARS = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
let FRONTS = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
wuKong.mecanumWheel(
wuKong.ServoList.S6,
wuKong.ServoList.S1,
wuKong.ServoList.S7,
wuKong.ServoList.S3
)
let vzdálenost = 10
let FL = 0
let RL = 0
basic.forever(function () {
    if (CODO.detectline(DigitalPin.P8) == 0 && CODO.detectline(DigitalPin.P12) == 0) {
        wuKong.mecanumRun(wuKong.RunList.rear, 50)
    } else if (CODO.detectline(DigitalPin.P8) == 1 && CODO.detectline(DigitalPin.P12) == 1) {
        wuKong.mecanumRun(wuKong.RunList.stop, 0)
        wuKong.mecanumRun(wuKong.RunList.right, 50)
        basic.pause(2500)
        wuKong.mecanumRun(wuKong.RunList.rear, 50)
    } else {
        if (CODO.detectline(DigitalPin.P8) == 1) {
            wuKong.mecanumSpin(wuKong.TurnList.Left, 50)
        } else if (CODO.detectline(DigitalPin.P8) == 1) {
            wuKong.mecanumSpin(wuKong.TurnList.Right, 50)
        }
    }
})
