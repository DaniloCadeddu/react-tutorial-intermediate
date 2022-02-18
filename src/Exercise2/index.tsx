import { Provider } from "react-redux";
import { Posts } from "./components/Posts";
import { store } from "./redux/store";

export const ExerciseTwo = () => {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
};
