import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from '../Pages/Login/Login';
import MainPart from '../Pages/MainPart/MainPart';
import StartPage from 'Pages/StartPage/StartPage';
import Registration from 'Pages/Registration/Registration';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="contacts" element={<MainPart />} />
      </Route>
    </Routes>
  );
};
