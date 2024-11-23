import { useSelector, useDispatch } from "react-redux";
import {
  increaseCoint,
  decreaseCoint,
  getLatestNews,
} from "./redux/actions/actionsCreator";

const App = () => {
  const count = useSelector((store) => store?.counter.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCoint());
  };

  const handleDecrease = () => {
    dispatch(decreaseCoint());
  };

  const handleNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <div>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleNews}>getNews</button>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
