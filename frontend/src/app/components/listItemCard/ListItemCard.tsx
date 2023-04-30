import React from 'react';
import styles from './ListItemCard.module.scss';
import { CoffeeItem } from '../../../types/Coffee.type';
import {Tag} from '../tag/Tag';
import {TeaItem} from '../../../types/Tea.type';

type CardProps = {
    item: CoffeeItem | TeaItem
}

export const ListItemCard: React.FC<CardProps> = ({ item }): JSX.Element => {
    return (
        <div className={styles.card} data-testid='list-item-card'>
            <div className={styles.imageContainer} >
                <img data-testid='list-item-image' src={item.image} alt=""/>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.bottomContent} >
                <div className={item.variety ? styles.titleContainer : null} data-testid='list-item-title'>{item.title}</div>
                { item.variety ? <div><Tag variety={item.variety}/></div> : null }
            </div>
        </div>
    );
};
