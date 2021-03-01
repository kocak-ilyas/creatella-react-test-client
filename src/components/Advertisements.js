import { useSelector } from "react-redux";

const Advertisements = () => {
  const scrolledPage = useSelector(
    (state) => state.productsReducer.scrolledPage
  );
  const randomNumbers = useSelector(
    (state) => state.productsReducer.randomNumbers
  );
  const imageUrl = `http://localhost:3000//ads/?r=`;
  return (
    <div>
      {scrolledPage > 30
        ? randomNumbers.map((number) => (
            <img
              key={number}
              className="ad"
              src={imageUrl + number}
              alt="img"
            />
          ))
        : null}
    </div>
  );
};

export default Advertisements;
