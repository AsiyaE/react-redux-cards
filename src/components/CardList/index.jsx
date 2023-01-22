import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addItems } from '../../redux/slices/cardListSlice'

import Card from '../Card/index'
import Favourites from '../Favourites/index'

import styles from './CardList.module.scss'


const CardList = () => {
  const { items, filterStatus } = useSelector((state) => state.cardList)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true); // для Skeleton
  const cardsNumber = 5;

  useEffect(()=> {
    setIsLoading(true);
    fetch(`https://shibe.online/api/shibes?count=${cardsNumber}&urls=true`
    )
    .then((res) => res.json())
    .then((arr) => {
      dispatch(addItems(arr))
      setIsLoading(false);
    }); 

    window.scrollTo(0,0);
  }, [])

  const visibleCards = filterStatus ? items.filter(card => card.liked === true): items;
  const cards = visibleCards.map((card) => 
    <Card key = {card.id} id={card.id} />
  )

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Favourites />
      </div>
      <h1 className={styles.title}>Cобакены</h1>
      <div className={styles.items}>
        {cards}
      </div>
    </div>
  );
};

export default CardList;