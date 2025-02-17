import React from 'react';
import { Link } from 'react-router-dom';
import add from '../assets/images/add.png';
import home from '../assets/images/home.png';
import about from '../assets/images/information.png';
import addFriend from '../assets/images/add-user.png';
import styles from '../Home/Navbar.module.scss';


const Navbar = () => {
return (
    <div className={styles.navbar}>
        <Link className={styles.link} to="/createpost"><img className={styles.icon} src={add} alt="" /></Link>
        <Link className={styles.link}><img className={styles.icon} src={home} alt="" /></Link>
        <Link className={styles.link}><img className={styles.icon} src={about} alt="" /></Link>
        <Link className={styles.link}><img className={styles.icon} src={addFriend} alt="" /></Link>
    </div>
);
};

export default Navbar;