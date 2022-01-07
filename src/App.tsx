import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routers from "./base/MyRoutes";
import store from "./stores/index";
import ErrorBoundary from "./base/ErrorBoundary";

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
