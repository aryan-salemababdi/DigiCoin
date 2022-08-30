import axios from "axios";

const URL = (numberCoin:number) =>{
    const BASE_URL:string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${numberCoin}&page=1&sparkline=false`;
    return BASE_URL
}
const getCoin:Function = async (getCoin:number) =>{
    const response = await axios.get(URL(getCoin));
    return response.data;
}


export {getCoin};