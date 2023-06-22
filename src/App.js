import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import rootReducer from "./redux/reducers";
import "./App.css";
import LoginPage from "./components/pages/LoginPage";
import SecondPage from "./components/pages/SecondPage";
import rootReducer from "./components/Reducers/reducers";
import { gapi } from "gapi-script";

const store = createStore(rootReducer);

const App = () => {
  const clientId =
    "832489980032-eodbe0jbulic1aa2r4tmpcbepr4nldvp.apps.googleusercontent.com";

  useEffect(() => {
    // Initialize Google API client
    function start() {
      gapi.client.init({
        clientId: clientId, // Set the client ID for authentication
        scope: "", // Set the scope of access permissions (if required)
      });
    }

    // Load the Google API client and start initialization
    gapi.load("client:auth2", start);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />{" "}
          {/* Render LoginPage component when the URL path is "/" */}
          <Route path="/second-page/*" element={<SecondPage />} />{" "}
          {/* Render SecondPage component when the URL path starts with "/second-page/" */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
