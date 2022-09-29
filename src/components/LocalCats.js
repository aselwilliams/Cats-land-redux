import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt, FaHeart } from "react-icons/fa";
import { deleteLocal, addToFav, markLiked } from "../actions";

function LocalCats({ display_alert }) {
  const localFacts = useSelector((state) => state.localFacts);
  const dispatch = useDispatch();

  const handleFavorite = (el) => {
    dispatch({ type: addToFav, payload: el });
    display_alert("Fact Added to Favorites", "green");
    dispatch({ type: markLiked, payload: el.id });
  };

  const handleDelete = (id) => {
    dispatch({ type: deleteLocal, payload: id });
    display_alert("Local Fact Deleted", "red");
  };
  return (
    <section className="bg-color">
      <strong>Local Cats</strong>(add a cat fact{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
      )
      <div className="local-container">
        {localFacts.map((el, j) => (
          <div className="local-cat" key={el.id}>
            {j + 1}. {el.text}
            <div className="btn-wrapper">
              <button
                id="fav-btn"
                className="btn btn-success"
                onClick={() => handleFavorite(el)}
              >
                <FaHeart className={el.liked === true ? "like" : ""} />
              </button>
              <button
                id="del-btn"
                className="btn btn-warning"
                onClick={() => handleDelete(el.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocalCats;
