import React from "react";
import { Auth } from "aws-amplify";
export const SignUp = () => {
  try {
    const { user } = Auth.signUp({
      username: "andresmunoz",
      password: "Asd.1234567890",
      attributes: {
        email: "felipem292@hotmail.com", // optional
        phone_number: "+573148299486",
        preferred_username: "andres6156", // optional - E.164 number convention
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
