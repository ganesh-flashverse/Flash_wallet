import React from "react";
import './App.css';
import { Main } from "./crypto/layout/Main";
import ThirdwebProviderWrapper from "./ThirdwebProviderWrapper";

function App() {
  return (
    <ThirdwebProviderWrapper>
      <div className="App">
        <Main />
      </div>
    </ThirdwebProviderWrapper>
  );
}

export default App;
