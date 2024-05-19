import "./index.scss";

import { Route, Routes } from "react-router-dom";

import { MainPage } from "./components/MainPage";
import { RedirectPage } from "./components/RedirectPage";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:any" element={<RedirectPage />} />
    </Routes>
  );
}

export default App;
