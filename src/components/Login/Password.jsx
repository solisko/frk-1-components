import React from "react";
import styles from "./Login.module.css"


const Password = ({onUserChange}) => {

  const onChange = (e) => {
    onUserChange(e.target.value)
    console.log(e.target.value);
  };

  return (
    <div className={styles.passwordContainer}>
      Password
      <input type="password" onChange={onChange} />
    </div>
  );
};
export default Password;
