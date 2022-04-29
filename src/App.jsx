import Categories from './components/Categories';
const categories = ['Hostings', 'Libraries', 'Settings', 'Services'];

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
