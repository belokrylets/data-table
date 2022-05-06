import { useDispatch } from 'react-redux';
import search from '../../media/images/search-logo.svg';
import './search.css'

const Search = () => {

    const dispatch = useDispatch();

    const handleSerach = (event) => {
        dispatch({
            type: 'SEARCH_INPUT',
            payload: event.target.value,
        })
    }
    return (
        <div className='search'>
            <div>
                <input onChange={handleSerach} type="text" placeholder='Поиск...' />
            </div>
            <div>
                <img src={search} alt="Логотип поиска" />
            </div>
        </div>
    );
}

export default Search;