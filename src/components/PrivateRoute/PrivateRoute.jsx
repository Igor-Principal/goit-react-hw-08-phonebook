import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const auth = useSelector(state => state.auth.token);

  return auth ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
