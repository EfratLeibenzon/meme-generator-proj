'use strict'
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 40,
            align: 'left',
            colorFill: 'white',
            colorStroke: 'black',
        }
    ]
}

function setMemeImg(imgId) {
    gMeme.selectedImgId = imgId
    console.log('gMeme', gMeme)
}
function setLineTxt(userInput) {
    gMeme.lines[gMeme.selectedLineIdx].txt = userInput
    saveToStorage('gMeme', gMeme)
}

function getMeme() {
    return gMeme
}

function setLineFontSize(sizeChange) {
    console.log('sizeChange:', sizeChange)
    if (sizeChange === 1) {
        gMeme.lines[gMeme.selectedLineIdx].size += 10
    }
    else {
        gMeme.lines[gMeme.selectedLineIdx].size -= 10
    }
}

function setTxtColor(inputvalue) {
    gMeme.lines[gMeme.selectedLineIdx].colorFill = inputvalue
    console.log('gmeme', gMeme)
}

function AddLine() {
    gMeme.selectedLineIdx++
    gMeme.lines.push({
        txt: '',
        size: 40,
        align: 'left',
        colorFill: 'white',
        colorStroke: 'black'
    })
}

function DeleteLine() {

}

function SwitchLine() {

}
