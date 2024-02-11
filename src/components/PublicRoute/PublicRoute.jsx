import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const auth = useSelector(state => state.auth.token);
  const { state } = useLocation();
  return !auth ? children : <Navigate to={state ? state : '/login'} />;
};

export default PublicRoute;
