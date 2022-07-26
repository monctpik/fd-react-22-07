import React from "react";

const UserCard = (props) => {
  const {
    user: { id, fname, lname, isSelected },
    setIsSelected,
  } = props;
  const styles = { backgroundColor: isSelected ? "teal" : "pink" };
  const handlerBtn = () => setIsSelected(id)
  return (
    <article style={styles}>
      <h3>
        id={id}) {fname} {lname}
      </h3>
      <button onClick={handlerBtn}>Select this user</button>
    </article>
  );
};

export default UserCard;