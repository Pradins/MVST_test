import React from 'react';
import { CoffeeItem } from '../../types/Coffee.type';
import styles from 'src/sass/ListItem.module.scss';
import { ListItemCard} from '../components/listItemCard/ListItemCard';
import {TeaItem} from '../../types/Tea.type';

type TeaPageProps = {
    teaList: TeaItem[]
}

export const TeaPage: React.FC<TeaPageProps> = ({ teaList }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Just you, hot water and our tea</div>
            <div className={styles.subtitle}>No pesticies or artificial flavours. We promise!</div>

            <div className={styles.itemsList}>
                {teaList.map((item: CoffeeItem, index) => {
                    return <ListItemCard key={index} item={item} />
                })}
            </div>
        </div>
  );
};
