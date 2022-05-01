import {Categories, Content} from './components';
import categories from './db.json';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <section className='section'>
          <Categories items={categories} />
          <Content/>
        </section>
      </div>
    </div>
  );
}

export default App;
