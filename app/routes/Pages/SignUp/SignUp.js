import React from "react";
import { Auth } from "aws-amplify";
export const SignUp = () => {
  try {
    const { user } = Auth.signUp({
      username: "cvillegas",
      password: "Asd.1234567890",
      attributes: {
        email: "cvillegas@quantum-x.io", // optional
        phone_number: "+573235704586",
        preferred_username: "cvillegas4586", // optional - E.164 number convention
        // other custom attributes
      },
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
  return (
    <div>
      <h1>formulario de registro</h1>
    </div>
  );
};
