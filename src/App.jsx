import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Eras from "./components/Eras";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import NestedOne from "./components/NestedOne";
import NestedTwo from "./components/NestedTwo";
import EraType from "./components/EraType";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eras/" element={<Eras />}>
          <Route path="nested-one" element={<NestedOne />} />
          <Route path="nested-two" element={<NestedTwo />} />

          <Route path=":type" element={<EraType />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
``;
