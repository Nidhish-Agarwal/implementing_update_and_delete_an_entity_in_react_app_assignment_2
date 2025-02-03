import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import axios from "axios";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URI);
        setItems(response.data);
      } catch (er) {
        console.log(er);
      }
    };

    fetchData();
  }, []);

  // Get the existing item from the server
  // const [items, setItems] = useState(null);
  // pass the item to UpdateItem as a prop

  return <ItemList items={items} setItems={setItems} />;
}

export default App;
