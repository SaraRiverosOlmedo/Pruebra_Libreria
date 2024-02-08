import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import BookList from './Components/Booklist';
import BookFavoritesView from './Components/BookFavoritesView';



 const App =() => {

  return (
    <Router>
      <div className=" h-screen w-full bg-black flex flex-col items-center sm:bg-black ">
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route path='/Favorites' element={<BookFavoritesView />} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
