import React, { useState } from "react";
import User from "./User";
import Password from "./Password";
import Button from "./Button";
import styles from "./Login.module.css"

const Login = () => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  return (
    <div className={styles.loginContainer}>
      <User onUserChange={setUser} />
      <Password onUserChange={setPassword} />
      <Button />
    </div>
  );
};

export default Login;
