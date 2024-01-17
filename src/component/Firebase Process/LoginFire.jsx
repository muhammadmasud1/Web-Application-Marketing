
import { auth, googleProvider } from "./firebaseKey";

const LoginFire = () => {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-red-600 rounded-lg my-3">
      <button
        onClick={signInWithGoogle}
        className="flex items-center justify-center gap-4 py-3"
      >
        Login With Google
      </button>
    </div>
  );
};

export default LoginFire;
