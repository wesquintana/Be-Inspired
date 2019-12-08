import store from "../store.js";
// @ts-ignore
const _imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getBackgroundImageAsync() {
    console.log("got to image");
    let res = await _imgApi.get();
    store.commit("backgroundImage", res.data.url);
  }
}

const imageService = new ImageService();
export default imageService;
