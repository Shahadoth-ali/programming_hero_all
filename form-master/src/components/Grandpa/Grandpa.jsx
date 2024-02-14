/* eslint-disable no-unused-vars */
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Unty from "../Unty/Unty";
import "./Grandpa.css";

import { createContext, useState } from "react";

export const AssetContext = createContext("go");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const asset = "diamon";
  const [money, setMoney] = useState(1000);

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net money:{money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Unty></Unty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
