'use strict'
function onRenderGallery() {
    const elImgGallery = document.querySelector('.img-gallery')
    const imgs = getImgs()

    const str = imgs.map(img => { return `<img id="${img.id}" src="${img.url}" alt="" onclick="onUploadImg(${img.id})" />` })
    elImgGallery.innerHTML = str.join('')
}