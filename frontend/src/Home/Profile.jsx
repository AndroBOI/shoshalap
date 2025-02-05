import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home/Profile.module.scss';
const Profile = () => {
return (
    <div className={styles.profileContainer}>
        <div className={styles.demoImage}></div>
        <div className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quibusdam natus optio temporibus nam obcaecati, atque, maiores quis asperiores ex, ducimus dignissimos. Totam voluptatem beatae ad vitae consectetur ipsa laudantium voluptatibus hic impedit facilis.</div>
        <Link to='/login'>Log Out</Link>
    </div>
);
};

export default Profile;