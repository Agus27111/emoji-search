import PropTypes from "prop-types";
import styles from "./Emojis.module.css";

function Emojis({ emojisData }) {
  return (
    <div className={styles.emojisGrid}>
      {emojisData.map((data, index) => (
        <div>
          <p
            key={index}
            dangerouslySetInnerHTML={{
              __html: `&#${data.character.codePointAt(0)}`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
Emojis.propTypes = {
  emojisData: PropTypes.array,
};

export default Emojis;
