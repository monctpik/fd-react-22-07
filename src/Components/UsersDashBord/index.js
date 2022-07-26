import React, { Component } from 'react';
import SelectUsersList from '../UsersList/index';
import UsersList from '../UsersList/index';

const usersDB = [
  {
    id: 4,
    fname: "Elon",
    lname: "Musk",
  },
  {
    id: 1,
    fname: "Molly",
    lname: "Dolly",
  },
  {
    id: 3,
    fname: "Elen",
    lname: "Musk",
  },
  {
    id: 2,
    fname: "Tom",
    lname: "Chrom",
  },
  {
    id: 5,
    fname: "Fred",
    lname: "Bredsk",
  },
];
class UsersDashbord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user)=>({...user, isSelected:false}))
    };
  }
  setUsers = (newUsers)=>{this.setState({users: newUsers})}
  render() {
    const { users } = this.state;
    return (
      <>
        <header>
        <SelectUsersList  users={users}/>
      </header>
      <main>
        <UsersList users={users} setUserSelected={this.setUsers}/>
      </main>
      </>
    );
  }
}

export default UsersDashbord;