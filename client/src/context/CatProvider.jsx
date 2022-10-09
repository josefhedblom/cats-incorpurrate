import { useEffect, useState, createContext } from "react";
const CatContext = createContext();

export const CatProvider = ({ children }) => {
  const [cats, setCats] = useState([]);
  const [sortingMethod, setSortingMethod] = useState();
  const [activeFilter, setActiveFilter] = useState("");

  const fetchData = () => {
    fetch("/api/cats")
      .then((response) => response.json())
      .then((data) => {
        setCats(data.cats);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    switch (sortingMethod) {
      case "none":
        fetchData();
        setActiveFilter("");
        break;
      case "cute":
        setCats((c) => [...c.sort((a, b) => b.cutenessLevel - a.cutenessLevel)]);
        setActiveFilter("cute");
        break;
      case "not_cute":
        setCats((c) => [...c.sort((a, b) => a.cutenessLevel - b.cutenessLevel)]);
        setActiveFilter("not_cute");
        break;
      case "high_life":
        setCats((c) => [...c.filter(({ livesLeft }) => livesLeft > 3)]);
        setActiveFilter("high_life");
        break;
      case "allergy":
        setCats((c) => [...c.filter(({ allergyInducingFur }) => allergyInducingFur !== false)]);
        setActiveFilter("allergy");
        break;
      case "none_allergy":
        fetchData();
        setActiveFilter("");
        break;
    }
  }, [sortingMethod]);

  return (
    <CatContext.Provider value={{ cats, setSortingMethod, activeFilter, setActiveFilter }}>
      {children}
    </CatContext.Provider>
  );
};

export default CatContext;
