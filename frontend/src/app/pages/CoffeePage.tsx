import React from 'react';
import { CoffeeItem } from '../../types/Coffee.type';
import styles from 'src/sass/ListItem.module.scss';
import { ListItemCard} from '../components/listItemCard/ListItemCard';

type CoffeePageProps = {
    coffeeList: CoffeeItem[]
}

export const CoffeePage: React.FC<CoffeePageProps> = ({ coffeeList }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title} data-testid='title'>Our beloved coffee</div>
            <div className={styles.subtitle} data-testid='subtitle'>Hand-picked, made with love, curated, call it what you want. But we promise you, this will be the best coffe of your life.</div>

            <div className={styles.itemsList} data-testid='list'>
                {coffeeList.map((item: CoffeeItem, index) => {
                    return <ListItemCard key={index} item={item} />
                })}
            </div>
        </div>
  );
};
