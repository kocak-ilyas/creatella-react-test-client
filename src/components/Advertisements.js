const Advertisements = () => {
  const randomNumber = [];
  for (let index = 0; index < 10; index++) {
    const element = Math.floor(Math.random() * 1000);
    const results = randomNumber.find((item) => item === element);
    results ? console.log("oyyy") : randomNumber.push(element);
  }
  console.log(randomNumber);
  const imageUrl = `http://localhost:3000//ads/?r=`;
  return (
    <div>
      {randomNumber.map((number) => (
        <img key={number} className="ad" src={imageUrl + number} alt="img" />
      ))}
    </div>
  );
};
export default Advertisements;
