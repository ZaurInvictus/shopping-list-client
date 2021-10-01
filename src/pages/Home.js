import React, { useEffect } from "react";
import { connect } from "react-redux";
import HeaderNav from "../components/Navbar";
import { getItems } from "../store/actions/items";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";


const Home = ({ getItems, itemsState: { items, loading, error } }) => {
  
  useEffect(() => {
    getItems(1);
  }, [getItems]);

  if (loading) return <h1>Loading...</h1>;
  // if (posts.length <= 0) return <h1>No Posts Created...</h1>;

  return (
    <>
     <h1>Home</h1>
    </>
  );
};



const mapStateToProps = (state) => {
  console.log("State:", state);
  return {
    itemsState: state.allItems,
  };
};

export default connect(mapStateToProps, { getItems })(Home);
