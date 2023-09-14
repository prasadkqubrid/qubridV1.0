import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";

function AuthBtn() {
  const auth = getAuth();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGitHub = async () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="social-sign-in">
      <GoogleLoginButton
        onClick={() => signInWithGoogle()}
        style={{ width: "100%" }}
      />
      <GithubLoginButton
        onClick={() => signInWithGitHub()}
        style={{ width: "100%" }}
      />
    </div>
  )
}

export default AuthBtn