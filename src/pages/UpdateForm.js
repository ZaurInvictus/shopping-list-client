import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const UpdateForm = (props) => {
  const [item, setItem] = useState(props.item);
  const [value, setValue] = useState(null);
  const history = useHistory();

  // Textarea characters counter
  let length = value ? value.length : 0;

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setItem({ ...item, [name]: value });
    setValue(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.updateItem(item);
    history.push("/");
  };

  const toggleIsPurchased = () => {
    const newItem = item;
    newItem.isPurchased = !newItem.isPurchased;
    props.updateItem(newItem);
  };

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  return (
    <>
      <div className="modal">
        <div className="modal__inner">
          <div className="modal__inner-header">
            <div className="modal__inner-header-title">SHOPPING LIST</div>
            <div className="modal__inner-header-close">
              <span className="material-icons-outlined">
                last_page
              </span>
            </div>
          </div>
          <form className="form" onSubmit={submitForm}>
            <div className="modal__inner-body">
              <div className="modal__inner-body-title">
                Edit your item below
              </div>
              <div className="input__outer">
                <input
                  className="input--text"
                  type="text"
                  placeholder="Product"
                  name="name"
                  value={item.name}
                  onChange={changeHandler}
                  //required
                />
              </div>
              <div className="input__outer">
                <div className="tooltip" id="charNum">
                  {length}/500
                </div>
                <div className="input__section">
                  <textarea
                    className="input--text"
                    type="text"
                    maxLength="500"
                    cols="30"
                    rows="4"
                    placeholder="Description"
                    name="description"
                    value={item.description}
                    onChange={changeHandler}
                    //required
                  />
                </div>
              </div>
              <div className="input__outer">
                <select
                  name="count"
                  className="input--text"
                  value={item.count}
                  onChange={changeHandler}
                >
                  <option value="" disabled>
                    How Many?
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="check">
                <input type="checkbox" onClick={toggleIsPurchased} />
                <label htmlFor="">Purchased</label>
              </div>
            </div>
            <div className="modal__inner-footer">
              <Link to="/" className="modal__inner-footer-close">
                Cancel
              </Link>
              <button className="modal__inner-footer-save">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
