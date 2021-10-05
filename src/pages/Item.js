import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItemById, updateItem } from "../store/actions/items";
import UpdateForm from "./UpdateForm";
import Spinner from "../components/Spinner";

const Item = ({
  getItemById,
  updateItem,
  match,
  item: { item, loading },
}) => {
  useEffect(() => {
    getItemById(match.params.id);
  }, [getItemById, match.params.id]);

  if (loading || item === null) return <Spinner />

  return (
    <>
      <div key={item.id}>
        <UpdateForm
          item={item}
          updateItem={updateItem}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.items,
  };
};

export default connect(mapStateToProps, {
  getItemById,
  updateItem,
})(Item);
