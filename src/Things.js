import React from "react";
import ThingCreate from "./ThingCreate";
import { connect } from "react-redux";
import axios from "axios";
import StarRank from "./StarRank";

const Things = ({ things, deleteThing }) => {
  return (
    <div>
      <h1>Things</h1>
      <ThingCreate />
      <ul>
        {things.map((thing) => {
          return (
            <li key={thing.id}>
              {thing.name}
              <button onClick={() => deleteThing(thing)}> x </button>
              <StarRank />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    things: state.things,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteThing: async (thing) => {
      await axios.delete(`/api/things/${thing.id}`);
      dispatch({ type: "DELETE_THING", thing });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Things);
