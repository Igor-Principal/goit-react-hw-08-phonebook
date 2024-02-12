import css from './errorPage.module.css';

const ErrorPage = () => {
  return (
    <div className="container">
      <h2 className={css.title}>
        This page does not exist! <br />
        Check your path
      </h2>
    </div>
  );
};

export default ErrorPage;
