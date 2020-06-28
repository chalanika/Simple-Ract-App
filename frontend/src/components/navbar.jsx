import React, { Component } from 'react';

//stateless functional component
// const Navbar = (props) => {
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="#">
//                 Navbar
//                 <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
//             </a>
//         </nav>
        
//     );
// }

//destructing arguments
const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
        
    );
}


// class Navbar extends Component {

//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     Navbar 
//                     <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//                 </a>
//             </nav>
//         );
//     }
// }

export default Navbar;