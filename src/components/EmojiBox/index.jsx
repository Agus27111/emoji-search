import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./EmojiBox.module.css";
function EmojiBox({ codePoint, character }) {
  const [selected, setSelected] = useState(false);

  //useEffect is used to render the page looking at the selected as a parameter if there is a change, and inside useEffect or if run it will try to make setSelected(false) again in 0.6 seconds and then the timer is cleared
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelected(false), 600;
    });
    return () => clearTimeout(timer);
  }, [selected]);
  return (
    <div
      className={styles.emojiBox}
      onClick={() => {
        navigator.clipboard.writeText(character);
        setSelected(true);
      }}
    >
      <p
        className={(classnames(styles.emoji), { [styles.selected]: selected })}
      >
        {character}
      </p>
      <p className={styles.emojiText}>{selected ? "Copied!" : codePoint }</p>
    </div>
  );
}

EmojiBox.propTypes = {
  codePoint: PropTypes.string,
  character: PropTypes.string,
};
export default EmojiBox;
