import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBarBurgerContainer } from "./NavBarBurger.style";

export function NavBarBurger() {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <NavBarBurgerContainer onClick={handleToggle}>
            <div className={isActive ? `burgerMenuActive` : `burgerMenu`}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={isActive ? `activeMenu` : `menu`}>
                <li><Link to="/" onClick={handleToggle}>Forside</Link></li>
                <li><Link to="/posters" onClick={handleToggle}>Produkter</Link></li>
                <li><Link to="/about" onClick={handleToggle}>Om os</Link></li>
                <li><Link to="/contact" onClick={handleToggle}>Kontakt os</Link></li>
            </ul>
        </NavBarBurgerContainer>    
    )
}