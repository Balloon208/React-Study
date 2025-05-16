/* ---------------------------------------------------------------------

  개념 : useactionstate() hook

  설명 : useactionstate() 는 비동기 작업을 처리하는 React hook 입니다.

        const [state, formAction, isPending] = useActionState(action, initialState)
        - state : 비동기 작업의 결과값
        - formAction : action을 수행하는 함수 (form의 action으로 사용)
        - isPending : 비동기 작업이 진행중인지 여부
        - action : 비동기 작업을 수행하는 함수
        - initialState : 초기 상태값
        
        주로 form action을 비동기로 실행하고, 해당 함수에서 반환된 정보를 사용할 때에 사용됩니다.
        또한 isPending을 사용하여 비동기 작업이 진행중인지 여부를 확인할 수 있습니다.

----------------------------------------------------------------------- */

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