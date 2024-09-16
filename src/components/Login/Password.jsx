import React from "react";

const Password = ({onUserChange}) => {

  const onChange = (e) => {
    onUserChange(e.target.value)
    console.log(e.target.value);
  };

  return (
    <div>
      Password
      <input type="password" onChange={onChange} />
    </div>
  );
};
export default Password;
