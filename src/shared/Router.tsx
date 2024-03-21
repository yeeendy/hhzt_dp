import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ItemUpload from '../pages/ItemUpload/ItemUpload';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<ItemUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
