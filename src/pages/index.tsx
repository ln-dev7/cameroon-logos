import Head from "next/head";

import CardList from "./../components/CardList";
import Header from "../components/Header";
import Section from "./../components/Section";
import dataOrder from "./../data/dataOrder";
import { useState, useEffect } from "react";

export default function Home() {
  const [filteredData, setFilteredData] = useState(dataOrder);
  return (
    <>
      <Head>
        <title>Cameroon Logos</title>
        <meta name="description" content="Cameroon Logos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="App">
        <Header />
        <main className="main">
          <div className="main__container">
            <div className="bg-lines">
              <div className="bg-line"></div>
              <div className="bg-line"></div>
              <div className="bg-line"></div>
              <div className="bg-line"></div>
              <div className="bg-line"></div>
              <div className="bg-line"></div>
              <div className="bg-line"></div>
              <div className="bg-line"></div>
            </div>
            <Section />
            <CardList filteredData={filteredData} />
          </div>
        </main>
      </div>
    </>
  );
}
