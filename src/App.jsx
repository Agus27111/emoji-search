import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Empty from "./components/Empty";
import Emojis from "./components/Emojis";
import Input from "./components/Input";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://emoji-api.com/emojis?access_key=9d909eda94511800ae35391b518377f3cdb44a39"
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }
    fetchEmojis();
  }, []);

  const handleSearchEmojis = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Input onChange={handleSearchEmojis} value={searchText} />
        {loading && <Empty text="Loading . . ." />}
        {error && <Empty text="Oops Error!!!" />}

        {emojisData.length > 0 && (
          <Emojis emojisData={emojisData} searchText={searchText} />
        )}
      </Container>
    </>
  );
}

export default App;
