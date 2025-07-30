import { useState } from 'react'
import './App.css'
import menuData from "./data"
import logo from "./assets/logoo.png"

function App() {
  const categories = Object.keys(menuData);

  return (
    <div className="app-container">
      <header>
        <div className='header_container'>
        <img src={logo} alt='logo' />
        </div>
        <p className="subtitle">Menu</p>
      </header>

      {categories.map((category) => (
        <section key={category} className="menu-section">
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
