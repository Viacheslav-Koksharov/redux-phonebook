import React from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/actions";
import s from "../Filter/Filter.module.css";

const Filter = ({ value, onFilterContact }) => {
  return (
    <form className={s.list}>
      <label className={s.label} htmlFor="input">
        Find contact by name
        <input
          className={s.input}
          type="text"
          id="input"
          value={value}
          onChange={onFilterContact}
        />
      </label>
    </form>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onFilterContact: (e) => dispatch(changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
