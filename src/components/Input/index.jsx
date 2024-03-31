import PropTypes from "prop-types";
import styles from "./Input.module.css";

function Input({ onChange, value }) {
  return (
    <input
      placeholder="Search input"
      onChange={onChange}
      value={value}
      className={styles.input}
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
