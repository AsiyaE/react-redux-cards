import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setFilterStatus } from '../../redux/slices/cardListSlice'

import styles from './Favourites.module.scss';
import cx from 'classnames'


const Favourites = () => {
  const filterStatus = useSelector((state) => state.cardList.filterStatus)
  const dispatch = useDispatch()
  const filterStyle = filterStatus ? styles.active : '';
  
  return (
    <div className={styles.container}>
      <button
        onClick = {() => dispatch(setFilterStatus())}
        className={cx(styles.button, filterStyle)}
      >
        <svg
          width="48"
          height="48"
          version="1.1" 
          viewBox="0 0 32 32" 
          xmlns="http://www.w3.org/2000/svg">
          <path d="M13.9,19.2c-0.7-0.8-1.7-1.2-2.7-1.2c-1,0-2,0.4-2.7,1.2l-0.9,1l-0.9-1C5.8,18.4,4.9,18,3.8,18c-1,0-2,0.4-2.7,1.2  c-1.5,1.5-1.5,4,0,5.6l5.7,5.9C7,30.9,7.2,31,7.5,31s0.5-0.1,0.7-0.3l5.7-5.9C15.3,23.2,15.3,20.7,13.9,19.2z" />
          <path d="M29,8h-8.9l-2.3-3.5C17.7,4.2,17.3,4,17,4H7C5.3,4,4,5.3,4,7v9c1.3,0,2.5,0.5,3.5,1.3c1-0.9,2.3-1.3,3.7-1.3  c1.6,0,3.1,0.6,4.2,1.8l0,0c2.2,2.3,2.2,6,0,8.3L13.5,28H29c1.7,0,3-1.3,3-3V11C32,9.3,30.7,8,29,8z M30,23.6L21.4,10H29  c0.6,0,1,0.4,1,1V23.6z" />
        </svg>
         Избранное
      </button>
    </div>
  );
};

export default Favourites;
