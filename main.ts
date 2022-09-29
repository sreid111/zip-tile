input.onButtonPressed(Button.A, function () {
    colour += 1
    if (colour > 7) {
        colour = 0
    }
})
input.onButtonPressed(Button.B, function () {
    brightness += 50
    if (brightness > 250) {
        brightness = 5
    }
})
let brightness = 0
let colour = 0
colour = 0
brightness = 5
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.setBrightness(brightness)
tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.White))
tileDisplay.show()
basic.forever(function () {
    tileDisplay.setBrightness(brightness)
    if (colour == 1) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Yellow))
    }
    if (colour == 2) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Orange))
    }
    if (colour == 3) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Red))
    }
    if (colour == 4) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Green))
    }
    if (colour == 5) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Blue))
    }
    if (colour == 6) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Purple))
    }
    if (colour == 7) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.White))
    }
    tileDisplay.show()
})
