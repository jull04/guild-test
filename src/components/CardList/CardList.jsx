import "./CardList.css";
import Preloader from "../Preloader/Preloader";
import { Link } from "react-router-dom";

const CardList = ({ catImages, loading }) => {

  const filteredCats = catImages.filter(cat => cat.breeds && cat.breeds.length > 0);

  return (
    <section>
      <div className="cat-grid">
        {loading ? (
          <Preloader />
        ) : (
          filteredCats.map((cat) => (
            <Link className="cat-info" to={`/cat/${cat.id}`} key={cat.id}>
              <div className="cat-card" key={cat.id}>
                <img src={cat.url} alt="Cat" />
              </div>
              <p>Breed: {cat.breeds[0].name}</p>
              <button className="button">More info</button>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default CardList;
