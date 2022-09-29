import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLocal, deleteFav } from "../actions";
import { nanoid } from "nanoid";
import { FaRegTrashAlt } from "react-icons/fa";

function FavoriteCats({ display_alert }) {
  const [inputVal, setInputVal] = useState("");

  const dispatch = useDispatch();
  const favFacts = useSelector((state) => state.favFacts);

  const handleAdd = (e) => {
    e.preventDefault();
    const newCat = { id: nanoid(), text: inputVal, liked: false };
    dispatch({ type: addToLocal, payload: newCat });
    display_alert("New Cats Fact Added!", "green");
    setInputVal("");
  };

  const handleDeleteFav = (id) => {
    dispatch({
      type: deleteFav,
      payload: id,
    });
    display_alert("Favorite Fact Deleted!", "red");
  };
  
  return (
    <div className="third-column">
      <section className="input-container">
        <form onSubmit={handleAdd}>
          <input
            value={inputVal}
            type="text"
            id="input-fact"
            placeholder="Add Cats Facts"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button type="submit" id="add-btn">
            ADD
          </button>
        </form>
      </section>
      <section id="favCats" className="bg-color">
        <strong>Favorite Facts</strong>
        <div className="fav-container">
          {favFacts.map((item, k) => {
            return (
              <div className="local-cat" key={item.id}>
                {k + 1}. {item.text}
                <div className="btn-wrappper">
                  <button
                    id="remove-btn"
                    className="btn btn-danger"
                    onClick={() => handleDeleteFav(item.id)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default FavoriteCats;
