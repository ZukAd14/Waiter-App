import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import TableEdit from "./components/pages/TableEdit/TableEdit";
import NotFound from "./components/pages/NotFound/NotFound";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTables } from "./redux/tablesRedux";
import Loader from "./components/common/Loader/Loader";



const App = () => {
  const dispatch = useDispatch();
  const [pending, setPending] = useState(false);

  useEffect(() => {
  setPending(true);
  dispatch(fetchTables());
  setPending(false);
  }, [dispatch]);

  return(
    <Container>
      <Header />
      <Routes>
        {
        (pending === false) &&
        <Route path="/" element={<HomePage />} />
        }
        {
          (pending === true) &&
        <Route path="/" element={<Loader />} />
        }
        <Route path="/table/:id" element={<TableEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  )
}
export default App;
