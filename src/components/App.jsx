import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from 'store/Auth/authSelector';
import { getProfileThunk } from 'store/Auth/auth-thunk';
import { setToken } from 'services/auth-service';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Layout from './Layout/Layout';
import ContactsPart from 'Pages/ContactsPart/ContactsPart';
import StartPage from 'Pages/StartPage/StartPage';
import Registration from '../Pages/Registration/Registration';
import Login from 'Pages/Login/Login';
import ErrorPage from 'Pages/ErrorPage/ErrorPage';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { token, isLoad, isLoading } = useSelector(authSelector);

  useEffect(() => {
    if (isLoad) {
      setToken(token);
      dispatch(getProfileThunk());
    } else {
      return;
    }
  }, [token, isLoad, dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
