import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import rendererPagination from '../../utils/rendererPagination';
import { useNavigate } from 'react-router-dom';
import './pagination.css'

const Pagination = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { page, totalPages } = useSelector(state => state.pages);

    const renderPage = rendererPagination(totalPages);

    const buttonNext = () => {
        dispatch({
            type: 'CHANGE_PAGE',
            payload: page + 1,
        })
        if (page + 1 === 1) {
            navigate('/');
        } else {
            navigate(`/${page + 1}`);
        }
    };

    const buttonPrew = () => {
        dispatch({
            type: 'CHANGE_PAGE',
            payload: page - 1,
        })
        if (page - 1 === 1) {
            navigate('/');
        } else {
            navigate(`/${page - 1}`);
        }
    };

    const handlePageButton = (event) => {
        dispatch({
            type: 'CHANGE_PAGE',
            payload: Number(event.target.name),
        })
        if (Number(event.target.name) === 1) {
            navigate('/');
        } else {
            navigate(`/${event.target.name}`);
        }
    };

    return (
        <div className='pagination'>
            <Button variant='outline-dark' disabled={page === 1} onClick={buttonPrew}>Назад</Button>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    {renderPage.map((currentPage) => (
                        <Button variant='outline-dark' className={page === currentPage ? 'active' : null} onClick={handlePageButton} name={currentPage} key={currentPage}>{currentPage}</Button>
                    ))}
                </ButtonGroup>
            </ButtonToolbar>
            <Button variant='outline-dark' disabled={page === totalPages} onClick={buttonNext}>Далее</Button>
        </div>
    );
}

export default Pagination;