import React from "react";
import { connect } from "react-redux";

const Home = ({ users, things }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Here at the Acme Item Tracker Corp we have {users.length} users and{" "}
        {things.length} things!
      </p>
    </div>
  );
};

const mapSToP = (state) => {
  return {
    users: state.users,
    things: state.things,
  };
};

export default connect(mapSToP)(Home);
