import Title from "./components/title/Title";
import Card from "./components/card/Card";
import "./App.css";

const App = () => {
  const details = [
    {
      id: 1,
      name: "Abby",
      favfood: "Samosa Tarkari",
      hobbey: "Tech Enthusiast",
      age: "30",
      monthdays: "9 Months & 15 Days",
      image: "abhiyan.jpg",
    },
    {
      id: 2,
      name: "Troopers",
      favfood: "Chow Chow",
      hobbey: "Loves Playing Guitar",
      age: "31",
      monthdays: "3 Months & 25 Days",
      image: "asbin.jpg",
    },
    {
      id: 3,
      name: "Torpey",
      favfood: "Dal Bhat",
      hobbey: "Born Entrepreneur",
      age: "30",
      monthdays: "9 Months & 20 Days",
      image: "shekhar.jpg",
    },
    {
      id: 3,
      name: "Khoya",
      favfood: "Chiya Puff",
      hobbey: "Anytime Ready To Hike",
      age: "30",
      monthdays: "10 Months & 20 Days",
      image: "sid.jpg",
    },
  ];
  return (
    <>
      <Title />
      <div className="card-container">
        <Card
          name={details[0].name}
          favfood={details[0].favfood}
          hobbey={details[0].hobbey}
          age={details[0].age}
          monthdays={details[0].monthdays}
          image={details[0].image}
        />
        <Card
          name={details[1].name}
          favfood={details[1].favfood}
          hobbey={details[1].hobbey}
          age={details[1].age}
          monthdays={details[1].monthdays}
          image={details[1].image}
        />
        <Card
          name={details[2].name}
          favfood={details[2].favfood}
          hobbey={details[2].hobbey}
          age={details[2].age}
          monthdays={details[2].monthdays}
          image={details[2].image}
        />
        <Card
          name={details[3].name}
          favfood={details[3].favfood}
          hobbey={details[3].hobbey}
          age={details[3].age}
          monthdays={details[3].monthdays}
          image={details[3].image}
        />
      </div>
    </>
  );
};

export default App;
