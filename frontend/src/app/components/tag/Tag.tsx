import React from 'react';
import styles from './Tag.module.scss';
import { CoffeeVariety } from '../../../types/Coffee.type';

type CoffeeCardProps = {
    variety: CoffeeVariety
}

const BackgrounColors = {
    [CoffeeVariety.ARABIC]: '#CD4C15',
    [CoffeeVariety.ROBUSTA]: '#758266'
}

export const Tag: React.FC<CoffeeCardProps> = ({ variety }): JSX.Element => {
    return (
        <div className={styles.tag} style={{backgroundColor: BackgrounColors[variety]}} data-testid='tag'>
            {variety}
        </div>
    );
};
