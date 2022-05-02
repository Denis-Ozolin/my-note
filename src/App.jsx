import { useSelector, useDispatch } from 'react-redux';

import { Categories, Content, DefaultContent } from './components';
import { addCategory } from './redux/note/note-slice';
import categories from './db.json';

function App() {
  const dispatch = useDispatch();

  const note = useSelector(state => state.note.selectedCategory);

  const onSelectContent = (obj) => {
    dispatch(addCategory(obj));
  }

  return (
    <div className="wrapper">
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
