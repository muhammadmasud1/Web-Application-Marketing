import { Link } from 'react-router-dom';
import styles from './Errorpage.module.css'
const ErrorPage = () => {
              return (
                <div>
                  <h1 className={styles.errorText}>Opps!</h1>
                  <div className="text-center">
                    <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
                    <p>
                      This page you are looking for might have been removed{" "}
                      <br />
                      had its name changed or it temporarily unavailable
                    </p>
                    <Link to="/">
                      <button className="btn btn-primary btn-md my-5">
                        Go to Home
                      </button>
                    </Link>
                  </div>
                </div>
              );
};

export default ErrorPage;