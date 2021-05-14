import { useContext } from "react";
import FirebaseContext from "../contexts/firebase";
import UserContext from "../contexts/user";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

function Header() {
  //Contexts
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <div className="border-gray-primary mb-8 h-16 bg-white border-b">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          {/* Header */}
          <div className="align-items flex items-center text-center text-gray-700 cursor-pointer">
            <h1 className="flex justify-center mx-2 w-full font-sans text-2xl font-bold lg:mx-0">
              <Link to={ROUTES.DASHBOARD} aria-label="Social Mittens logo">
                Social Mittens
              </Link>
            </h1>
          </div>

          {/* Content on Right */}
          <div className="align-items flex items-center text-center text-gray-700">
            {/* If there is a user? */}
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD} arial-label="Dashboard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 mr-6 text-black-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>

                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 mr-6 text-black-light cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>

                <div className="flex items-center cursor-pointer">
                    <Link to={`/p/${user.displayName}`}>
                        <img
                        className="rounded-full h-8 w-8 flex mr-2 lg:mr-0" 
                        src={`/images/avatars/${user.displayName}.jpg`}
                        alt={`${user.displayName} profile`}
                        />
                    </Link>
                </div>
              </>
            ) : (
              <> </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
