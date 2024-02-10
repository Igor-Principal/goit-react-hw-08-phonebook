import { Route, Routes } from 'react-router-dom';
// import Layout from './Layout/Layout';
// import Login from '../Pages/Login/Login';
// import MainPart from '../Pages/MainPart/MainPart';
// import StartPage from 'Pages/StartPage/StartPage';
// import Registration from 'Pages/Registration/Registration';
import { lazy } from 'react';

const Layout = lazy(() => import('./Layout/Layout'));
const MainPart = lazy(() => import('../Pages/MainPart/MainPart'));
const StartPage = lazy(() => import('../Pages/StartPage/StartPage'));
const Registration = lazy(() => import('../Pages/Registration/Registration'));
const Login = lazy(() => import('../Pages/Login/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/contacts" element={<MainPart />} />
      </Route>
    </Routes>
  );
};
