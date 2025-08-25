import { useState } from 'react'
import './App.css'
import menuData from "./data"
import logo from "./assets/logoo.png"

function App() {
  const categories = Object.keys(menuData);

  const formatCategory = (key) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  }

  return (
    <div className="app-container">
      <header>
        <div className='header_container'>
        <img src={logo} alt='logo' />
        </div>
        <div>
         <p className="subtitle">Il nostro menu</p>
         <p className="subtitle-1">Seleziona una categoria</p>
        </div>
        

         <nav className="category-nav">
        {categories.map((category) => (
        <a
         key={category}
         href={`#${category}`}
         className="category-btn"
        >
      {formatCategory(category)}
    </a>
  ))}
</nav>
      </header>

      {categories.map((category) => (
        <section key={category} id={category} className="menu-section">
          <h2 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <ul>
            {menuData[category].map(({ name, description, price }) => (
              <li key={name} className="menu-item">
                <div className="menu-item-header">
                  <span className="dish-name">{name}</span>
                  <span className="dish-price">€  {price.toFixed(2)}</span>
                </div>
                {description && <p className="dish-description">{description}</p>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default App
