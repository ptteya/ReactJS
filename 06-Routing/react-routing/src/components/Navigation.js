import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {

    const setNavStyle = (({ isActive }) => {
        return isActive
            ? styles['active-link']
            : undefined
    })

    return (
        <nav>
            <ul>
                <li> <NavLink className={setNavStyle} to="/">Home</NavLink></li>
                <li> <NavLink className={setNavStyle} to="/about">About</NavLink></li>
                <li> <NavLink className={setNavStyle} to="/pricing">Pricing</NavLink></li>
                <li> <NavLink className={setNavStyle} to="/pricing/premium">Premium Pricing</NavLink></li>

                <li>
                    <NavLink
                        to="/starships"
                        // style={({ isActive }) => ({
                        //     background: isActive ? 'lightblue' : 'lightgray'
                        // })}
                        className={setNavStyle}
                    >
                        Starships
                    </NavLink>
                </li>

                <li> <NavLink className={setNavStyle} to="/millennium-falcon">Millennium Falcon</NavLink></li>
                <li> <NavLink className={setNavStyle} to="/contacts">Contacts</NavLink></li>
            </ul>
        </nav >
    )
}

export default Navigation;