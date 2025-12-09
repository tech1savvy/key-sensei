import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </>
  );
};

export default PageNotFound;
