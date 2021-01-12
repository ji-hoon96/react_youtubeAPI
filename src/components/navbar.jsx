import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="title">
                <img src="/images/logo.png" className="title_logo"></img>
                <span className="title_name">Youtube</span>
                <input type="text" className="title_box" placeholder="Search.."></input>
                <button className="title_search">
                    <img src="/images/search.png" className="title_image"></img>
                </button>
            </div>
        );
    }
}

export default Navbar;