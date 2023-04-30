'use strict'
var gElCanvas
var gCtx

function onUploadImg(imgId) {
    let elImgGallery = document.querySelector('.img-gallery')
    elImgGallery.classList.add('hide')
    let elMemeEditor = document.querySelector('.meme-editor')
    elMemeEditor.classList.add('flex')
    setMemeImg(imgId)
    renderMeme()

}

function onMainPage() {
    let elImgGallery = document.querySelector('.img-gallery')
    elImgGallery.classList.remove('hide')
    let elMemeEditor = document.querySelector('.meme-editor')
    elMemeEditor.classList.remove('flex')

}

function renderImg(imgId) {
    let elImg = new Image()
    const imgUrl = gImgs.find(img => img.id === imgId).url
    elImg.src = imgUrl
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawTxt()
        drawRect()
    }

}
function onEnterTxt(ele) {
    setLineTxt(ele.value)
    renderMeme()
}

function renderMeme() {
    renderImg(getMeme().selectedImgId)
}

function drawTxt() {
    gMeme.lines.forEach(line => {
        gCtx.textBaseLine = 'middle'
        gCtx.textAlign = line.align
        gCtx.fillStyle = line.colorFill
        gCtx.font = `${line.size}px Impact`
        gCtx.strokeStyle = line.colorStroke
        gCtx.lineWidth = 2
        gCtx.strokeText(line.txt, line.x, line.y)
        gCtx.fillText(line.txt, line.x, line.y)
    })
}

function drawRect() {
    setRectPos()
    const line = gMeme.lines[gMeme.selectedLineIdx]
    gCtx.beginPath()
    gCtx.rect(line.rectPos.x, line.rectPos.y, line.rectPos.width, line.rectPos.height)
    gCtx.lineWidth = 1
    gCtx.stroke()
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
    switchLine()
    renderMeme()
}

function onDownloadMeme(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

