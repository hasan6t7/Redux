
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <>
    <Provider store={store}>
     <TodoLists/>
    </Provider>
    </>
  );
}

export default App;
