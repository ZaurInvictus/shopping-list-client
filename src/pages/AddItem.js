import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addItem } from "../store/actions/items";
import FormErrors from "../components/FormErrors";
import formValidations from "../utils/formValidations";


const AddItem = ({ addItem }) => {
  const [value, setValue] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    count: "",
  });
  
  // Textarea characters counter
  let length = value ? value.length: 0
  const history = useHistory();

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    descriptionError: "",
  });

  const { nameError, descriptionError } = formErrors;
  const { name, description, count } = formData;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValue(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault();
    const isValid = formValidations(formData, setFormErrors);
    if (isValid) {
      setFormErrors({
        name: "",
        description: "",
        count: "",
      });

      addItem(formData);
      setFormData({ name: "", description: "", count: "" });
      history.push("/");
    }
  };

  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__inner-header">
          <div className="modal__inner-header-title">SHOPPING LIST</div>
          <div className="modal__inner-header-close">
            <span className="material-icons-outlined" id="modalClose">
              last_page
            </span>
          </div>
        </div>
        <form className="form" onSubmit={submitForm}>
          <div className="modal__inner-body">
            <div className="modal__inner-body-title">Add your new item below</div>
            <div className="input__outer">
              <FormErrors message={nameError} />
              <input
                className={nameError ? "input--text error" : "input--text"}
                type="text"
                placeholder="Product"
                name="name"
                value={name}
                onChange={changeHandler}
                //required
              />
            </div>
            <div className="input__outer">
              <div className="tooltip">
              {length}/500
              </div>
              <div className="input__section">
                <FormErrors message={descriptionError} />
                <textarea
                  className="input--text"
                  type='text'
                  maxLength="500"
                  cols="30"
                  rows="4"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={changeHandler}
                  //required
                />
              </div>
            </div>
            <div className="input__outer">
              <select
                name="count"
                className="input--text"
                value={count}
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
          </div>
          <div className="modal__inner-footer">
            <Link to="/" className="modal__inner-footer-close">
              Cancel
            </Link>
            <button className="modal__inner-footer-save">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addItem: state.addItem,
  };
};

export default connect(mapStateToProps, { addItem })(AddItem);
