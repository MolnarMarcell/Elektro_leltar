import './style.css';
import Snowfall from 'react-snowfall';

function App() {
  return (
    <div className="app-shell">
      <div className="snow-background" aria-hidden="true">
        <Snowfall
          snowflakeCount={220}
          speed={[0.8, 0.6]}
          wind={[-0.2, 1.5]}
          radius={[0.5, 2.5]}
          color="#fff"
        />
      </div>

      <main className="content">
        <h1>Elektro - Leltár rendszer v1</h1>
        <div className="wrapper">
          <h1>Keresőmező</h1>
          <div className="input-box">
            <input type="text" placeholder="Keresés" required />
          </div>
          <button type="submit" className="btn">Keresés</button>
        </div>
        <div className="showbox">
          <p>Itt jelenik meg a szöveg...</p>
        </div>
      </main>
    </div>
  );
}

export default App;
