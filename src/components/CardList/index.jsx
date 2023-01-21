import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addItems } from '../../redux/slices/cardListSlice'

import Card from '../Card/index'
import Favourites from '../Favourites/index'

import styles from './CardList.module.scss'


const CardList = () => {
  const items = useSelector((state) => state.cardList.items)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true); // для Skeleton


  useEffect(()=> {
    setIsLoading(true);
    fetch(`https://shibe.online/api/shibes?count=3&urls=true`
    )
    .then((res) => res.json())
    .then((arr) => {
      dispatch(addItems(arr))
      setIsLoading(false);
    }); 

    window.scrollTo(0,0);
  }, [])
  
  const cards = items.map((card) => 
    <Card key = {card.id} id={card.id} />
  )

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Favourites />
      </div>
      {/* <h2 className={styles.title}>Все собакены</h2> */}
      <div className={styles.items}>
        {cards}
      </div>
    </div>
  );
};

export default CardList;