import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem, updateItem } from "../store/actions/items";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import confirmDelete from "../utils/confirmDelete";
import EmptyState from "./EmptyState";
import Header from "../components/Header";

const Landing = ({
  getItems,
  deleteItem,
  updateItem,
  itemsState: { items, loading },
}) => {
  // TOGGLE IS COMPLETED
  const toggleIsPurchased = useCallback(
    (id) => {
      const newItem = items.filter((item) => item.id === id);
      newItem[0].isPurchased = !newItem[0].isPurchased;
      updateItem(newItem[0]);
    },
    [items, updateItem]
  );

  useEffect(() => {
    getItems();
  }, [getItems]);

  // Handle loading
  if (loading) return <Spinner />;

  // Empty state
  if (items.length === 0) return <EmptyState />;

  return (
    <>
      <Header />
      <section className="section">
        <div className="auto__container">
          <div className="section__inner">
            <div className="section__inner-header">
              <h2>Your items</h2>
              <Link className="btn" to="/add-item">
                Add Task
              </Link>
            </div>

            <div className="section__inner-body">
              <div>
                <Alert />
              </div>
              <ul>
                {items.map((item) => (
                  <li
                    key={item.id}
                    className={item.isPurchased ? "checked" : ""}
                  >
                    <div>
                      <input
                        type="checkbox"
                        className="input_check"
                        onChange={() => toggleIsPurchased(item.id)}
                        checked={item.isPurchased}
                      />
                      <div>
                        <div className="litext">{item.name}</div>
                        <div className="litext2">{item.description}</div>
                      </div>
                    </div>
                    <Link
                      className="material-icons edit"
                      to={`/item/${item.id}`}
                    >
                      edit
                    </Link>

                    <button
                      onClick={() => deleteItem(item.id)}
                      // eslint-disable-next-line react/jsx-no-duplicate-props
                      onClick={() => confirmDelete(item.id, deleteItem)}
                      className="material-icons delete"
                    >
                      delete_outline
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsState: state.items,
  };
};

export default connect(mapStateToProps, {
  getItems,
  deleteItem,
  updateItem,
})(Landing);
