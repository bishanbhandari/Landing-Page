import React, { useEffect, useState } from "react";
import Background from "./Components/Backgroud/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "Your passions" },
  ];

  const [herocount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2 ?0:count+1})
    },3000);
  },[])
  
  return (
    <>
      <Background playStatus={playStatus} herocount={herocount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[herocount]}
        herocount={herocount}
        playStatus={playStatus}
        setHeroCount={setHeroCount}
      />
    </>
  );
};

export default App;
