import React, { useCallback, useEffect, useMemo, useState } from "react";
import DoosBlocks from "../component/fun/DoosBlocks";
import validation from "../component/fun/doosValidation";
import Nav from "../component/mainPage/nav";
import DoosProfile from "../component/fun/doosProfile";
import { Helmet } from "react-helmet-async";

export default function DoosPage() {
  const [isCircleTurn, setTurn] = useState(true); //player is Circle
  const blocksID = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [UAB, setUAB] = useState([]);
  const [crossBlocks, setCrossBlocks] = useState([]);
  const [circleBlocks, setCircleBlocks] = useState([]);
  const { winBlocks, winStatus } = validation(UAB, circleBlocks, crossBlocks);
  function clickHandle(id) {
    if (!UAB.includes(id) && !winStatus) {
      setUAB((oldUAB) => {
        return [...oldUAB, id];
      });
      if (isCircleTurn) {
        setCircleBlocks((oldCircleBlocks) => [...oldCircleBlocks, id]);
      } else {
        setCrossBlocks((oldCrossBlocks) => [...oldCrossBlocks, id]);
      }
      setTurn((playerTurn) => !playerTurn);
    }
  }
  console.log(winStatus);
  return (
    <>
      <Helmet>
        <title>Doos</title>
      </Helmet>
      <div>
        <Nav />
        <div className="grid grid-cols-12 mx-12 mt-32">
          <DoosProfile />
        </div>
      </div>
    </>
  );
}
