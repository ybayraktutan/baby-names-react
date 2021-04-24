import logo from './logo.svg';
import './App.css';
import babyNamesData from './babyNamesData.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Baby Name Picker</h2>
      </header>
      <div>
        {babyNamesData.sort((babyName1, babyName2) => (
           babyName1.name.localeCompare(babyName2.name)
         ))
         .map((babyName, index) => (
           babyName.sex == "f" ? 
           <span key = {index} className = "female">{babyName.name} </span>
           :<span key = {index} className = "male">{babyName.name} </span>
          ))}
      </div>
    </div>
  );
}

export default App;

