import React, { useState } from "react";
import User from "./User";
import Password from "./Password";

const Login = () => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  
  return (
    <div>
      <User onUserChange={setUser} />
      <Password onUserChange={setPassword}/>
    </div>
  );
};

export default Login;
