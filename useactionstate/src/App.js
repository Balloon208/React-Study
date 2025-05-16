import { useActionState, useEffect, useState } from "react";
import { addToCart } from "./action.js";
import axios from 'axios';
  
function AddToCartForm({itemID, itemTitle}) {
  const [message, formAction, isPending] = useActionState(addToCart, null);
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {isPending ? "Loading..." : message}
    </form>
  );
}

function App() {
  const [item, setItem] = useState([]);

  const getItemList = async () => {
    await axios.get('http://58.151.99.238:20005/getItem')
    .then((response) => {
      setItem(response.data);

      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  useEffect(() => {
    getItemList();
  }, []);
  
  return (
    <>
      {item.map((item) => (
        <AddToCartForm key={item.id} itemID={item.id} itemTitle={item.name} />
      ))}
    </>
  );
}

export default App;