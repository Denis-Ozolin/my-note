import Categories from './components/Categories';
import categories from './db.json';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Categories items={categories}/>
      </div>
    </div>
  );
}

export default App;
