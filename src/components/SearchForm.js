import React from 'react'

const searchForm = props => {
  return (
    <React.Fragment>
    <form onSubmit={props.handleOnSubmit}>
      <input className="search"
      name="city"
      type="text"
      onChange={props.handleOnChange}
      placeholder="type city's name"
      />
      <button className="search-btn">Search</button>
      </form>
      {props.errorMessage ? <p className="err-msg">Error: Location Not Found</p> : null}
    </React.Fragment>
  )
}

export default searchForm