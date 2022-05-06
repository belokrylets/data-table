import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Search from './search/Search';
import TableData from './table/TableData';
import Pagination from './pagination/Pagination';
import fetchPosts from '../asynsAction/fetchPosts';

const Posts = () => {
    
    const { limit } = useSelector(state => state.pages);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(limit))
    }, []);

    return (
        <div>
            <Search />
            <TableData />
            <Pagination />
        </div>
    );
}

export default Posts;