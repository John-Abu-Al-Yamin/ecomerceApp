import { useDispatch, useSelector } from "react-redux";
import "./AddToCard.css";
import { addtocard, clear, deletecard } from "../../rtk/Slices/Card-slice";

const AddToCard = () => {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const totalprice = card.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="add-card">
      <h2 className="title-card">Welcome To Card..</h2>
      <div className="container container-card">
        <div className="total">
          <h3>Total-Price {totalprice.toFixed(2)} $</h3>
        </div>
        <button className="clear-card" onClick={() => dispatch(clear())}>
          Clear Card...
        </button>

        <table>
          <thead>
            <tr>
              <th>TiTle</th>
              <th>Img</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {card.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>

                <td>{product.quantity}</td>

                <td>{product.price}$</td>
                <td>
                  <button onClick={() => dispatch(deletecard(product))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddToCard;

// <td>{product.quantity}</td>
