'use strict'
const SAVED_MEME = 'memeDB'
var gSavedMemes = []
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 40,
            x: 200,
            y: 50,
            font: 'impact',
            align: 'center',
            colorFill: 'white',
            colorStroke: 'black',
        }
    ]
}
var gStartPos

function setMemeImg(imgId) {
    gMeme.selectedImgId = imgId
}
function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    saveToStorage('gMeme', gMeme)
}

function getMeme() {
    return gMeme
}

function setLineFontSize(sizeChange) {
    if (sizeChange === 1) {
        gMeme.lines[gMeme.selectedLineIdx].size += 10
    }
    else {
        gMeme.lines[gMeme.selectedLineIdx].size -= 10
    }
}

function setTxtColor(inputValue) {
    gMeme.lines[gMeme.selectedLineIdx].colorFill = inputValue
}

function AddLine() {
    const pos = setPos()
    gMeme.lines.push(creatLine(pos))
    setSelectedLine(gMeme.lines.length - 1)
}

function setSelectedLine(lineIdx) {
    gMeme.selectedLineIdx = lineIdx
}
function DeleteLine() {
    if (gMeme.lines.length === 1) return
    gMeme.lines.pop()
}

function switchLine() {
    let lineIdx = gMeme.selectedLineIdx + 1
    if (lineIdx === gMeme.lines.length) {
        lineIdx = 0
    }
    setSelectedLine(lineIdx)
}

function setPos() {
    let y = 0;
    if (gMeme.selectedLineIdx === 1) {
        y = 350
    } else if (gMeme.selectedLineIdx === 2) {
        y = 250
    } else {
        y = 200
    }
    return y
}

function creatLine() {
    return {
        txt: 'your text here',
        size: 40,
        x: gElCanvas.width / 2,
        y: setPos(),
        font: 'impact',
        align: 'center',
        colorFill: 'white',
        colorStroke: 'black'
    }
}

function setRectPos() {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    const txtWidth = gCtx.measureText(line.txt).width
    const txtHeight = line.size
    const rectPos = {
        width: Math.floor(txtWidth + 20),
        height: Math.floor(txtHeight + (txtHeight / 4)),
        x: Math.floor(line.x - txtWidth / 2 - 10),
        y: line.y - txtHeight,
    }
    if (line.x === 0) rectPos.x = line.x
    else if (line.x === gElCanvas.width) rectPos.x = line.x - txtWidth
    line.rectPos = rectPos
}
