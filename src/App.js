import React from "react";
import WatchCustomizer from "./components/WatchCustomizer";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Shoppin - Apple Watch Studio</h1>
      </header>
      <main>
        <WatchCustomizer />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Shoppin Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
