import Routes from "./components/routes/Routes";
import { Provider } from "react-redux";
import store from "./store";
import ErrorHandler from "./components/errorHandler/ErrorHandler";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <ErrorHandler />
    </Provider>
  );
}
