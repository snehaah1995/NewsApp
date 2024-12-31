import React from 'react'

const Navbar = ({setCategory, theme, toggleTheme}) => {
  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
<div className="container-fluid">
    <a className="navbar-brand badge text-bg-secondary fs-4" href="#">TodayNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link  " aria-current="page" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link " aria-current="page" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link " aria-current="page" onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link " aria-current="page" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link " aria-current="page" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li> 
      </ul>
    </div>
    <button onClick={toggleTheme} className="btn btn-outline-secondary">
        switch
      </button>
  </div>
</nav>  )
}

export default Navbar