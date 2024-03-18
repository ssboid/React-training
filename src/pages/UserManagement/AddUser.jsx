import React, {useState} from "react";

const AddUser = () => {
  const [username, setUsername] = useState("jAAAAAAAAAAAAAAAAAA");

  const handleUsernameChange = () => {
    console.log("username changed");
  };
  const saveForm = () => {
    console.log('save form');
    console.log('username: ', username);
  }

  return (
    <div>
      <h3 class="text">Right Knot</h3>
      <div>
        <label>Username</label>
        <input type="text" onChange={handleUsernameChange} value={username} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
      <div>
        <button onClick={saveForm}>Save</button>
      </div>
    </div>
  );
};

export default AddUser;
