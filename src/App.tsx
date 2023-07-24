import "./App.css";

import { useState } from "react";

const apiEndpoint = "/api";

function App() {
  const [fetchedData, setFetchedData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setFetchedData("");
    await fetch(apiEndpoint, {
      method: "GET",
    })
      .then(() => {
        setIsLoading(false);
        setFetchedData("🥳 fetched some data");
      })
      .catch((e) => {
        setIsLoading(false);
        setFetchedData(`🫠 ${e}`);
      });
  };

  return (
    <>
      <h1>React demo</h1>
      <div className="card">
        <p>{isLoading ? "loading..." : fetchedData}&nbsp;</p>
        <button disabled={isLoading} onClick={fetchData}>
          Fetch Data
        </button>
      </div>
    </>
  );
}

export default App;
