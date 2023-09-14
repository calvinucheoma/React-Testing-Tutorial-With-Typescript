import './App.css';
import { MuiMode } from './components/Mui/Mui-mode';
import { AppProviders } from './components/Providers/AppProviders';
// import { Counter } from './components/Counter/Counter';
// import { Application } from './components/Application/Application';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        {/* <Application /> */}
        {/* <Counter /> */}
      </div>
    </AppProviders>
  );
}

export default App;
