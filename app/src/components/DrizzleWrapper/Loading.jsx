import React from "react";

export default function Loading(props) {
  if (props.web3.status === "failed") {
    return (
      // Display a web3 warning.
      <main>
        <h1>⚠️</h1>
        <p>
          This browser has no connection to the Ethereum network. Please use the
          Chrome/FireFox extension MetaMask, or dedicated Ethereum browsers Mist
          or Parity.
        </p>
      </main>
    );
  }

  if (props.drizzleStatus.initialized) {
    // Load the dapp.
    return props.children;
  }

  return (
    // Display a loading indicator.
    <main>
      <h1>⚙️</h1>
      <p>Loading dapp...</p>
    </main>
  );
}
