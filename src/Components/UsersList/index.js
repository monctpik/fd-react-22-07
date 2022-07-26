import React from "react";
import UserCard from "../UserCard";
const UsersList = (props) => {
  const { users, setUserSelected } = props;
  const setIsSelected = (id)=>{
    const newUsers = users.map((user)=>({
      ...user,
      isSelected: user.id===id ? !user.isSelected : user.isSelected
    }))
    setUserSelected(newUsers)
  }
  const showUser = (user) => (
    <UserCard key={user.id} user={user} setIsSelected={setIsSelected} />
  );
  return (
    <section>
      <h2>Users list:</h2>
      {users.map(showUser)}
    </section>
  );
};

export default UsersList;