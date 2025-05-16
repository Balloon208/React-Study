import axios from 'axios';

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get('itemID');

  const response = await axios.get(`http://58.151.99.238:20005/getItem/${itemID}`);

  if (response.data.amount > 0) {
    return `Added ${itemID} to cart.`;
  }
  else{
    return `Item ${itemID} is out of stock.`;
  }
}