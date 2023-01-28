import "./scss/style.scss";
import { arrGallery } from "./app/galleryItems.js";
import {addGallery} from './app/galleryFunc.js'
const galleryItems = document.querySelector(".gallery-items");


addGallery(arrGallery, galleryItems);

const controls=document.querySelectorAll('.controls')
console.log(controls)
