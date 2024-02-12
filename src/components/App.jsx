import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

// const Layout = lazy(() => import('./Layout/Layout'));
// const ContactsPart = lazy(() => import('../Pages/ContactsPart/ContactsPart'));
// const StartPage = lazy(() => import('../Pages/StartPage/StartPage'));
// const Registration = lazy(() => import('../Pages/Registration/Registration'));
// const Login = lazy(() => import('../Pages/Login/Login'));
import Layout from './Layout/Layout';
import ContactsPart from 'Pages/ContactsPart/ContactsPart';
import StartPage from 'Pages/StartPage/StartPage';
import Registration from '../Pages/Registration/Registration';
import Login from 'Pages/Login/Login';
import ErrorPage from 'Pages/ErrorPage/ErrorPage';

export const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPart />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
