import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      {!user ? (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut}>Logout</button>
          <a href="/shopping-list">Go to Shopping List</a>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
