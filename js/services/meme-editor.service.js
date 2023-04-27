var gMeme = { imgId: '', userInput: ['', ''], fontSize: 40, colorFill: 'white', colorStroke: 'black' }

function setMemeImg(imgId) {
    gMeme.imgId = imgId
    console.log('gMeme', gMeme)
}
function setLineTxt(userInput) {
    gMeme.userInput = userInput
    saveToStorage('gMeme', gMeme)
}

function getMeme() {
    return gMeme
}

function setLineFontSize(sizeChange) {
    console.log('sizeChange:', sizeChange)
    if (sizeChange === 1) {
        gMeme.fontSize += 10
    }
    else {
        gMeme.fontSize -= 10
    }
}

function setTxtColor(inputvalue) {
    gMeme.colorFill = inputvalue
    console.log('gmeme', gMeme)
}

function AddLine() {

}

function DeleteLine() {

}

function SwitchLine() {

}
