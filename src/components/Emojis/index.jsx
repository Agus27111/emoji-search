import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./Emojis.module.css";
import EmojiBox from "../EmojiBox";
import { filterEmojis } from "../../utils/filterEmojis";
import Empty from "../Empty";

function Emojis({ emojisData, searchText }) {
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    setFilteredEmojis(filterEmojis({ emojisData, searchText }));
  }, [searchText, emojisData]);
  if (filteredEmojis.length > 0) {
    return (
      <div className={styles.emojisGrid}>
        {filteredEmojis.map((data, index) => (
          <div key={index}>
            <EmojiBox
              key={index}
              codePoint={data.codePoint}
              character={data.character}
            />
            ?
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <Empty text="No emojis found" />
      </div>
    );
  }
}
Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string,
};

export default Emojis;
