import store from "../store.js";
import Quote from "../models/quote.js";
// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  constructor() {}
  async getQuoteAsync() {
    let res = await _quoteApi.get();
    let quote = new Quote(res.data.quote);
    store.commit("quote", quote);
  }
}

const quoteService = new QuoteService();
export default quoteService;
