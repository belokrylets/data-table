import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search/Search';
import TableData from './components/table/TableData';

const App = () => {
  return (
    <div className="App">
<Search />
<TableData />
    </div>
  );
}

export default App;
