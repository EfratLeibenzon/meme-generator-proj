'use strict'
let gElCanvas = document.querySelector("#meme-canvas")
let gCtx = gElCanvas.getContext('2d')
let gLineX = gElCanvas.width / 2
let gLineY

function onUploadImg(imgId) {
    let elImgGallery = document.querySelector('.img-gallery')
    console.log(elImgGallery)
    elImgGallery.classList.add('hide')
    let elMemeEditor = document.querySelector('.meme-editor')
    elMemeEditor.classList.remove('hide')
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
    renderImg(getMeme().selectedImgId)

    if (getMeme().selectedLineIdx === 0) {
        gLineY = gElCanvas.height / 4

    } else if (getMeme().selectedLineIdx === 1) {
        gLineY = gElCanvas.height - gElCanvas.height / 4

    } else {
        gLineY = gElCanvas.height / 2
    }

    gCtx.lineWidth = 2
    gCtx.strokeStyle = getMeme().lines[gMeme.selectedLineIdx].colorStroke
    gCtx.fillStyle = getMeme().lines[gMeme.selectedLineIdx].colorFill
    gCtx.font = getMeme().lines[gMeme.selectedLineIdx].size + 'px Impact'
    gCtx.fillText(userInput, gLineX, gLineY)
    gCtx.strokeText(userInput, gLineX, gLineY)

    console.log('gmeme', gMeme)
    console.log(gCtx.font)

}

function onFontSizeChange(sizeChange) {
    setLineFontSize(sizeChange)
    renderMeme()
}

function onTxtColorChange(inputValue) {
    setTxtColor(inputValue)
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