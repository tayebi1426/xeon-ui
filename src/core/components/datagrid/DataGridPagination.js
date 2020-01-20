import React from "react";

function Pagination(props) {
    return <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <PaginationItems {...props}/>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
    </nav>
}

function PaginationItems({page, pageCount, onPageChange}) {
    let items = [];
    for (let i = 1; i < pageCount + 1; i++) {
        items.push(<li className={ page === i ? 'page-item active' : 'page-item'} onClick={() => onPageChange(i)}>
            <a className="page-link" href="#">{i}</a>
        </li>)
    }
    return items;
}

export default Pagination;
