import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ItemUpload from '../pages/ItemUpload/ItemUpload';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<ItemUpload />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
