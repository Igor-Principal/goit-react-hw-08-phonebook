import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loaderStyle">
      <Circles
        height="80"
        width="80"
        color="#d3d2d2"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
