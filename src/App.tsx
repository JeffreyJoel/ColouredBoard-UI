import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractReads } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import "./assets/styles.css";
import { useState, useEffect } from "react";
import boardABI from "../src/board.json";

// Define the types for each variable
type Coord = {
  x: number;
  y: number;
};

type Data = {
  result: string;
};

type Contract = {
  address: any;
  abi: any;
  functionName: string;
  args: number[];
};

export function App() {
  const { isConnected }: { isConnected: boolean } = useAccount();
  const [coord, setCoord]: [Coord, (coord: Coord) => void] = useState({
    x: 1,
    y: 1,
  });

  const { data, isError, isLoading }: { data?: Data[]; isError: boolean; isLoading: boolean } = useContractReads({
    
    contracts:  [
      {
        address: "0xe662f8C49Dddd43A8CdCA0290Eb5E4D8110DDb62",
        abi: boardABI,
        functionName: "getColor",
        args: [coord.x - 1, coord.y - 1],
      },
    ] as Contract[],
  });

  let cellColor: string = "white";
  let cellTextColor: string = "black";
  let boardResult: string = data ? data[0]?.result : "1";

  useEffect(() => {
    if (boardResult === "black") {
      cellTextColor = "white";
    } else if (boardResult === "red") {
      cellTextColor = "white";
    }

    const cellElement = document.getElementById(coord.x + "" + coord.y);
    if (cellElement) {
      cellElement.style.backgroundColor = boardResult;
      cellElement.style.color = cellTextColor;
      cellElement.style.fontWeight = "bold";
    }
  }, [boardResult, coord.x, coord.y]);

  const handleCellClick = (rowValue: number, colValue: number) => {
    setCoord({ x: rowValue, y: colValue });
  };

  const Board = ({ disable }: { disable: boolean }) => {
    return (
      <div className="board">
        {[1, 2, 3, 4, 5, 6, 7].map((colElem) => (
          <div className="row" key={colElem}>
            {[5, 4, 3, 2, 1].map((rowElem) => (
              <button
                type="button"
                key={rowElem}
                id={rowElem + "" + colElem}
                className="cell"
                onClick={() => handleCellClick(rowElem, colElem)}
                disabled={disable}
              >
                {rowElem}, {colElem}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="container">
      <nav>
        Board UI
        <div className="nav-connect-button">
          <ConnectButton />
        </div>
      </nav>
      <section className="main-container">
        <div className="board-container">
          <Board disable={!isConnected} />
        </div>

        <section className="input-container">
          {isConnected && (
            <div>
              <label htmlFor="x-axis">X axis value:</label>
              <input
                id="x-axis"
                type="number"
                value={coord.x}
                min={1}
                max={5}
                step={1}
                pattern="[1-5]"
                readOnly
              />
            </div>
          )}

          {isConnected && (
            <div>
              <label htmlFor="y-axis">Y axis value:</label>
              <input
                id="y-axis"
                type="number"
                value={coord.y}
                min={1}
                max={7}
                step={1}
                pattern="[1-7]"
                readOnly
              />
            </div>
          )}
        </section>
      </section>
    </section>
  );
}