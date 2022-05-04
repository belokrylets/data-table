import search from '../../media/images/search-logo.svg';
import './search.css'

const Search = () => {
    return (
        <div className='search'>
            <div>
                <input type="text" placeholder='Поиск' />
            </div>
            <div>
                <img src={search} alt="Логотип поиска" />
            </div>
        </div>
    );
}

export default Search;