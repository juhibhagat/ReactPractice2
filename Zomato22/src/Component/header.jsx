import React from "react"
import './header.css'


export function Header(){
    return(
        <div>
            <header className="d-flex justify-content-around h-3 bg-info">
                <div>
                 <h1>   NareshIt</h1>
                </div>
                <div className=" w-25 input-group ">
                    <input type="search" className="form-control"  />
                    <span className="bi bi-search input-group-text"></span>
                </div>
                <nav className="d-flex ">
                    <li className="m-2"><a href="#">All Courses</a></li>
                     <li className="m-2"><a href="#">Services</a></li>
                      <li className="m-2"><a href="#">Training</a></li>
                       <li className="m-2"><a href="#">About</a></li>
                       <li className="m-2"><a href="#">Contact</a></li>
                       <button className="btn btn-danger border border-danger p-3">Login</button>
                </nav>
            </header>
        </div>
    )
}