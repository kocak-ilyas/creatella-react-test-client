import { useSelector } from "react-redux";

const Advertisements = () => {
  const randomNumbers = useSelector(
    (state) => state.productsReducer.randomNumbers
  );
  const imageUrl = `http://localhost:3000//ads/?r=`;
  return (
    <div>
      {randomNumbers.map((number) => (
        <img key={number} className="ad" src={imageUrl + number} alt="img" />
      ))}
    </div>
  );
};
export default Advertisements;
