import Item from "./Item";
import axios from "axios";

const ItemList = ({ items, setItems }) => {
  // your code here
  const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

  const handleDelete = async (item) => {
    try {
      const response = axios.delete(`${API_URI}/${item.id}`);
      const updatedItems = items.filter((curItem) => curItem.id != item.id);
      setItems(updatedItems);
      console.log(response);
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </>
  );
};

export default ItemList;
