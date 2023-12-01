import React from 'react';


export default function Navbar() {
    return (
        <header>
          <h1>My Website</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
      );
}