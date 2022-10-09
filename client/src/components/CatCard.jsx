import Heart from "../assets/heart-pixel.png";
import Allergy from "../assets/svannen_cirkel.png";
import { useContext } from "react";
import CatContext from "../context/CatProvider";

function CatCard() {
  const { cats } = useContext(CatContext);

  const getHeart = (livesleft) => {
    let hearts = [];
    for (let i = 0; i < livesleft; i++) {
      hearts.push(<img className="cat__heart" src={Heart} alt="" />);
    }
    return hearts;
  };

  return (
    <>
      <div className="cat">
        {cats.map(({ image, name, cutenessLevel, allergyInducingFur, livesLeft }) => {
          return (
            <div className="cat__card">
              <div className="cat__name">
                <h2>{name}</h2>
              </div>
              <div className="cat__image">
                <img src={`images/${image}`} alt={image} />
              </div>
              <div className="cat__info">
                <div className="cat__cute">
                  <p>Cuteness level: {cutenessLevel}</p>
                </div>
                <div className="cat__livesLeft">
                  <p>Lives left:</p>
                  <span>{getHeart(livesLeft)}</span>
                </div>
                {allergyInducingFur && (
                  <div className="cat__allergyInducingFur">
                    <p>Allergy friendly</p>
                    <span>
                      <img className="cat__allergy" src={Allergy} alt="" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CatCard;
