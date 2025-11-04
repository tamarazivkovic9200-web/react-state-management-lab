import { useState } from "react";
import "./App.css";


export default function App() {
  
  const [team, setTeam] = useState([]); // Stores fighters you've added to your team
  const [money, setMoney] = useState(100); // Your current budget
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://i.graphicmama.com/uploads/2019/3/5c8bd4b1e3317-Halloween-Zombie-Cartoon-Vector-Character.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://png.pngtree.com/png-clipart/20250425/original/pngtree-zombie-boxing-png-image_19604821.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://cdn.pixabay.com/photo/2024/03/09/13/26/zombie-8622631_1280.jpg",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://cdn.pixabay.com/photo/2025/02/04/10/40/zombie-9381519_1280.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://cdn.pixabay.com/photo/2021/09/25/16/19/zombie-6655317_1280.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://cdn.pixabay.com/photo/2024/06/22/11/23/ai-generated-8846009_1280.jpg",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://cdn.pixabay.com/photo/2022/11/21/19/13/zombie-7607949_1280.jpg",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://cdn.pixabay.com/photo/2024/08/11/05/26/ai-generated-8960684_1280.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://cdn.pixabay.com/photo/2023/09/29/00/20/ai-generated-8282673_1280.jpg",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://cdn.pixabay.com/photo/2023/10/12/16/04/spooky-8311122_1280.jpg",
    },
  ]);


  const handleAddFighter = (fighter) => {
    // Check if you have enough money to recruit this fighter
    if (money < fighter.price) {
      console.log("Not enough money!");
      alert("Not enough money to add this fighter!");
      return;
    }

    // Add fighter to your team (make a new array)
    setTeam([...team, fighter]);

    // Remove that fighter from available list
    setZombieFighters(zombieFighters.filter((z) => z.id !== fighter.id));

    // Subtract their price from your budget
    setMoney(money - fighter.price);
  };

 
  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((t) => t.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };

  
     // TEAM STATS 

  const totalStrength = team.reduce((sum, f) => sum + f.strength, 0);
  const totalAgility = team.reduce((sum, f) => sum + f.agility, 0);


     // RENDER UI

  return (
    <div className="App">
      <h1> Zombie Fighters Team Builder</h1>
      <h2> Money: ${money}</h2>

      {/* ===== AVAILABLE FIGHTERS ===== */}
      <h3>Available Fighters</h3>
      <ul className="fighters">
        {zombieFighters.map((fighter) => (
          <li key={fighter.id} className="fighter-card">
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      {/* ===== TEAM SECTION ===== */}
      <h3>Your Team</h3>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <>
          <ul className="team">
            {team.map((fighter) => (
              <li key={fighter.id} className="fighter-card">
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(fighter)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* TEAM STATS */}
          <div className="totals">
            <h4>Total Strength: {totalStrength}</h4>
            <h4>Total Agility: {totalAgility}</h4>
          </div>
        </>
      )}
    </div>
  );
}