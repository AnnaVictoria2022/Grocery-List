import './App.css';
import image from './grocery.jpg';
import imageTwo from './grocery2.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={image} width="250px" alt="Shopping cart"/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className="container">
        <img src={imageTwo} width="250px" alt="Store attendant"/>
      </div>
    </div>
  );
}

export default App;
