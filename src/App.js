import React, { useState } from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {
  const [categories] = useState([
    { name: "About Me",description:"About Me"},
    { name: "Portfolio",description:"My Portfolio"},
    { name: "Contact", description: "My Contact" },
    { name: "Resume", description: "My Resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;