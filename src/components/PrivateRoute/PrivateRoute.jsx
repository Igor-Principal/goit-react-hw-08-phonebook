import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const auth = useSelector(state => state.auth.token);
  // const { isLoading } = useSelector(state => state.auth);
  const location = useLocation();

  return auth ? children : <Navigate to={'/login'} state={location} />;
};

export default PrivateRoute;
