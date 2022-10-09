import { useContext } from "react";
import CatContext from "../context/CatProvider";
function Navbar() {
  const { setSortingMethod, activeFilter } = useContext(CatContext);
  return (
    <div className="navbar">
      <div className="cat__sorting">
        <p>Sort:</p>
        <button onClick={() => setSortingMethod("none")}>None</button>
        <button
          className={activeFilter === "cute" ? "active" : ""}
          onClick={() => setSortingMethod("cute")}
        >
          Much cute
        </button>
        <button
          className={activeFilter === "not_cute" ? "active" : ""}
          onClick={() => setSortingMethod("not_cute")}
        >
          Not cute
        </button>
      </div>
      <div className="cat__filtering">
        <p>Filter:</p>
        <button
          className={activeFilter === "allergy" ? "active" : ""}
          onClick={() => setSortingMethod("allergy")}
        >
          Allergy friendly
        </button>
        <button
          className={activeFilter === "high_life" ? "active heart__button" : ""}
          onClick={() => setSortingMethod("high_life")}
        >
          Strong health
        </button>
        <button
          className={activeFilter === "none_allergy" ? "active" : ""}
          onClick={() => setSortingMethod("none_allergy")}
        >
          No filter
        </button>
      </div>
    </div>
  );
}

export default Navbar;
