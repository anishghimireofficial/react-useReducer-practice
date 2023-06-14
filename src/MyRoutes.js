import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Form from "./Form";
import Nav from "./Nav";

const MyRoutes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
