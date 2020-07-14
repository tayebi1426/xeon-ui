import React, {useContext} from "react";
import DataGridContext from './DataGridContext';
import {Icon} from '../../index'

function Pagination(props) {
    let {page, pageCount} = useContext(DataGridContext);
    console.log('Pagination : ', page, pageCount);
    return <nav aria-label="Page navigation">
        <ul className="pagination">
            <li className="page-item">
                <button className="prev page-link" >
                    <Icon code='chevron-right' perFix="fa" size="1x"/>
                </button>
            </li>
            <PaginationItems page={page} pageCount={pageCount}/>
            <li className="page-item">
                <button className="next page-link">
                    <Icon code='chevron-left' perFix="fa" size="1x"/>
                </button>

            </li>
        </ul>
    </nav>
}

function PaginationItems({page, pageCount, onPageChange}) {
    let items = [];
    let maxLen = pageCount > 3 ? 3 : pageCount;
    maxLen += 1;
    for (let i = 1; i <= maxLen; i++) {
        items.push(<li key={i} className={page === i ? 'page-item active' : 'page-item'}
                       onClick={() => onPageChange(i)}>
            <a className="page-link" href="#">{i}</a>
        </li>)
    }
    return items;
}

export default Pagination;
