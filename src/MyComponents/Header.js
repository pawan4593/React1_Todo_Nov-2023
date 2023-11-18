import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{style : "--bs-scroll-height: 100px"}}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
          </ul>
          {props.searchBar ? <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>:"Search bar not available"}
        </div>
      </div>
    </nav>
  </>
  )
}

//What if user did not send the values in the props
Header.defaultProps = {
  title : "This is default title" ,
  searchBar : true
}

Header.propTypes = {
  title : PropTypes.string,
  searchBar : PropTypes.bool.isRequired //This prop becomes required . No effect if default value is present .
}
