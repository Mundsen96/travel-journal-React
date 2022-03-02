import Item from './Components/Item.js';
import Navbar from './Components/Navbar.js'
import './App.css';
import data from './data.js'

function App() {
  let dataForRender = data;
  let mappedData = dataForRender.map(card => {
    return(
      <Item 
      key={card.id}
      item={card}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <div className="item-container">
        {mappedData}
      </div>
    </div>
  );
}

export default App;
