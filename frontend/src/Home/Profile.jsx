import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home/Profile.module.scss';
const Profile = () => {
return (
    <div className={styles.profileContainer}>
        <div className={styles.demoImage}></div>
        <h2  className={styles.userName}>John Doe</h2>
        <div className={styles.relationships}>
            <div className={styles.relationWrapper}>
                    <div className={styles.following}>Following 23</div>
                    <div className={styles.followers}>followers 23</div>
            </div>
        </div>
        <div className={styles.post}>Posts 2</div>  
        <div className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quibusdam natus optio temporibus nam obcaecati, atque, maiores quis asperiores ex, ducimus dignissimos. Totam voluptatem beatae ad vitae consectetur ipsa laudantium voluptatibus hic impedit facilis.</div>
        <Link to='/login'>Log Out</Link>
    </div>
);
};

export default Profile;