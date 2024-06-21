import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Mui from "./MUI";
import UIkit from "./UIkit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/mui" element={<Mui />} />
            <Route path="/uikit" element={<UIkit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
