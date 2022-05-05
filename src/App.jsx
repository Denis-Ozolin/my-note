import { useSelector, useDispatch } from 'react-redux';

import { Header, Categories, Content, DefaultContent } from './components';
import { addCategory } from './redux/note/noteSlice';
import categories from './db.json';

function App() {
  const dispatch = useDispatch();
  const note = useSelector(state => state.note.selectedCategory);

  const onSelectContent = (obj) => {
    dispatch(addCategory(obj));
  }

  return (
    <div className="wrapper">
        <Header/>
      <div className="container">
        <section className='section'>
          <Categories items={categories} selectContent={onSelectContent} />
          {!note? <DefaultContent/>: <Content content={note}/>}
        </section>
      </div>
    </div>
  );
}

export default App;
