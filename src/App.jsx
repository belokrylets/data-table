import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Posts from './components/Posts';
import { useSelector } from 'react-redux';

const App = () => {
  
  const { page } = useSelector(state => state.pages);

  return (
    <div>
      <Router>
        <Routes>
          <Route path={page === 1 ? `/` : `${page}`} element={<Posts />} />
          <Route path="*" element={<h3>Ошибка 404. Страница не найдена</h3>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
