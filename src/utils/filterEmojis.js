export const filterEmojis = ({
  emojisData,
  searchText = "",
  maxResult = 20,
}) => {
  const filteredEmojis = emojisData.filter((emoji) => {
    if (emoji.character.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (emoji.slug.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  });
  return filteredEmojis.slice(0, maxResult);
};
