
import { auth } from "./firebaseKey";

const SignOutFire = () => {
  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default SignOutFire;
