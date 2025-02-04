import React from 'react';
import styles from '../Home/Search.module.scss';
const Search = () => {
return (
    <div className={styles.inputContainer}>
        <input 
        placeholder='Enter a username'
        className={styles.input} type="text" />
    </div>
);
};

export default Search;