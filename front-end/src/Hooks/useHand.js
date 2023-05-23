import { useState, useEffect } from "react";

export default function useHand () {
  const [userHand, setUserHand] = useState({
    card1: {},
    card2: {},
    card3: {},
    card4: {},
    card5: {}
  })

  const [cpuHand, setCpuHand] = useState({
    card1: {},
    card2: {},
    card3: {},
    card4: {},
    card5: {}
  })

  return {
    userHand,
    setUserHand,
    cpuHand,
    setCpuHand,
  }
};