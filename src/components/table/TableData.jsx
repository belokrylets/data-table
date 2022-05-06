import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import renderTable from '../../utils/renderTable';
import searchFilter from '../../utils/searchFilter';
import sort from '../../utils/sort';
import { pageCounter } from '../../utils/pageCounter'
import './tableData.css'
import up from '../../media/images/up.svg'
import down from '../../media/images/down.svg'

const TableData = () => {

  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);
  const { option, mode } = useSelector(state => state.sort);
  const { page, limit } = useSelector(state => state.pages);
  const { searchValue } = useSelector(state => state.search);

  const sortedPosts = sort(posts, option, mode);
  const searchFilterPosts = searchFilter(sortedPosts, searchValue);

  const curentPosts = renderTable(searchFilterPosts, page, limit);

  useEffect(() => {
    dispatch({
      type: 'TOTAL_PAGE',
      payload: pageCounter(searchFilterPosts.length),
    })
  }, [searchFilterPosts.length]);

  const sortById = () => {
    dispatch({
      type: 'CHANGE_ID_SORT'
    })
  };

  const sortByTitle = () => {
    dispatch({
      type: 'CHANGE_TITLE_SORT'
    })
  };

  const sortByBody = () => {
    dispatch({
      type: 'CHANGE_BODY_SORT'
    })
  };

  return (
    <div className='tableData'>
      <Table bordered hover size='xxl'>
        <thead>
          <tr>
            <th className='col-1 column-center'>
              ID
              <img onClick={sortById} src={mode.id ? down : up} alt="Лого сортировкиё" />
            </th>
            <th className='col-4'>
              Заголовок
              <img onClick={sortByTitle} src={mode.title ? down : up} alt="Лого сортировкиё" />
            </th>
            <th className='col-7'>
              Описание
              <img onClick={sortByBody} src={mode.body ? down : up} alt="Лого сортировкиё" />
            </th>
          </tr>
        </thead>
        <tbody>
          {curentPosts.map(({ id, title, body }) => (
            <tr key={id}>
              <td className='column-center'>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          ))}

        </tbody>
      </Table>
      {searchFilterPosts.length === 0 ? <h5 style={{ textAlign: 'center' }}>Постов нет</h5> : null}
    </div>
  );
}

export default TableData;