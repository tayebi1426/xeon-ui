import React from 'react'

//import Input from '../../components/form/Input'
function NavBarSearch() {
    return <div className="search" data-search-path="/app/pages/search">
        <input name="searchKeyword" id="searchKeyword" placeholder="menu.search"/>
        <span className="search-icon">
            <i className="simple-icon-magnifier"/>
          </span>
    </div>
}

export default NavBarSearch;