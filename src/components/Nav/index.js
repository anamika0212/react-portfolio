import React from 'react';

function Nav() {
    const categories = [
        { name: "About Me",description:"About Me"},
        { name: "Portfolio",description:"My Portfolio"},
        { name: "Contact", description: "My Contact" },
        { name: "Resume", description: "My Resume" },
      ];

      function categorySelected(name) {
        console.log(`${name} clicked`)
      }
      
  return (
    <header>
  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      
       {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span onClick={categorySelected(category.name)}>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
  );
}

export default Nav;