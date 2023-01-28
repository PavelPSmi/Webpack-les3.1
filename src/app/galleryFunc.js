
export const addGallery = (arrGallery, galleryItems) => {
  for (let el of arrGallery) {
    galleryItems.innerHTML += addEl(el);
  }
};

const addEl = (el) => {
  if (el.type === "image") {
    return `<div class='gallery-el' id="${el.id}"><p>${el.title}</p>
    <img src="${el.image}" alt="image${el.id}">
</div>`;
  } else if (el.type === "audio") {
    return `<div class='gallery-el-source' id="${el.id}"><p>${el.title}</p>
    <audio src="${el.sound}" controls="controls"></audio>
</div>`;
  } else if (el.type === "video") {
    return `<div class='gallery-el-video' id="${el.id}"><p>${el.title}</p>
    <video src="${el.video}" controls></video>
</div>`;
  } else {
    console.log(`${el} no`);
  }
};

