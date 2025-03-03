//rafce
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Home = () => {
  return (
    <div>
      Home
      {/* mode=modal: after click SignIn, it won't be redirected to the page of sign-in. */}
      {/* the sign in modal will be poped up instead */}

      {/* In case of not-yet-login */}
      <SignedOut>
      <SignInButton mode="modal" />
      </SignedOut>

      {/* In case of already-login  */}
      <SignedIn>
        <UserButton mode="modal" />
      </SignedIn>

    </div>
  );
};

export default Home;
