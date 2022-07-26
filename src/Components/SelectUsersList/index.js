import React from "react";
const SelectUsersList = (props) => {
  const {users} = props;
  const usersSelected = users.filter((user)=>user.isSelected);
  return (
    <section>
      <h2>Selected users:</h2>
      {usersSelected.map((user, i)=><p key={i}>{user.fname}</p>)}
    </section>
  );
};

export default SelectUsersList;