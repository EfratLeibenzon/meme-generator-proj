'use strict'
let gElCanvas = document.querySelector("#meme-canvas")
let gCtx = gElCanvas.getContext('2d')
let g1stLineX = gElCanvas.width / 4
let g1stLineY = gElCanvas.height / 4
// let g2ndLineX=gElCanvas.height-gElCanvas.height/4
// let g2ndLineY=gElCanvas.width-gElCanvas.width/4

function onUploadImg(imgId) {
    setMemeImg(imgId)
    renderImg(imgId)

}

function renderImg(imgId) {
    let img = document.getElementById(imgId)
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMeme() {
    var userInput = document.getElementById("text-input").value
    setLineTxt(userInput)
    renderImg(getMeme().imgId)

    gCtx.lineWidth = 2
    gCtx.strokeStyle = getMeme().colorStroke
    gCtx.fillStyle = getMeme().colorFill
    gCtx.font = getMeme().fontSize + 'px Impact'
    gCtx.fillText(userInput, g1stLineX, g1stLineY)
    gCtx.strokeText(userInput, g1stLineX, g1stLineY)

    console.log('gmeme', gMeme)
    console.log(gCtx.font)
}

function onFontSizeChange(sizeChange) {
    setLineFontSize(sizeChange)
    renderMeme()
}

function onTxtColorChange(inputvalue) {
    setTxtColor(inputvalue)
    renderMeme()

}
function onAddLine() {
    AddLine()
    renderMeme()
}

function onDeleteLine() {
    DeleteLine()
    renderMeme()
}

function onSwitchLine() {
    SwitchLine()
    renderMeme()
}