import React from 'react';
import styles from './Home.module.scss';
import Navbar from '../Home/Navbar';
import Search from '../Home/Search';
import Profile from '../Home/Profile';
import Content from '../Home/Content';
const Home = () => {
return (
    <div className={styles.home}>
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.center}>
                <Search/>
                <Content/>
            </div>
            <Profile/>
        </div>
    </div>
);
};

export default Home;