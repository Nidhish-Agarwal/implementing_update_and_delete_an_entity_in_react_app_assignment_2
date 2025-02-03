import App from "../App";

const Item = ({ item, handleDelete }) => {
  // Render a single item
  // Add a Delete and Edit button

  return (
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <button
        onClick={() => {
          handleDelete(item);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
