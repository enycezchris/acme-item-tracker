import React from "react";
import { connect } from "react-redux";
import UserCreate from "./UserCreate";
import axios from "axios";

const Users = ({ users, deleteUser }) => {
  return (
    <div>
      <h1>Users</h1>
      <UserCreate />
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
              <button onClick={() => deleteUser(user)}> x </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser: async (user) => {
      await axios.delete(`/api/users/${user.id}`);
      dispatch({ type: "DELETE_USER", user });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
