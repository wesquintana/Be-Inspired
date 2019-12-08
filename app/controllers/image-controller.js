import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function _drawImage() {
  let backgroundImage = store.State.backgroundImage;
  document.getElementById(
    "bg-image"
  ).style.backgroundImage = `url('${backgroundImage}')`;
}
export default class ImageController {
  constructor() {
    this.getBackgroundImageAsync();
    store.subscribe("backgroundImage", _drawImage);
  }
  async getBackgroundImageAsync() {
    try {
      ImageService.getBackgroundImageAsync();
    } catch (error) {
      console.error(error);
    }
  }
}
