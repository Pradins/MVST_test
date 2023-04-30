import React from 'react';
import styles from './MobileHeader.module.scss';
import Link from 'next/link';

export const MobileHeader: React.FC<{selectedIndex: number, changeSelectedIndex }> = ({selectedIndex, changeSelectedIndex}) => {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.content}>
                <div className={styles.title}>Brewed</div>
                <div className={styles.menuContainer}>
                    <Link href="/coffees">
                        <div className={`${styles.menuItem} ${selectedIndex === 0 ? styles.activeMenuItem : null}`} onClick={() => changeSelectedIndex(0)}>Our Coffee</div>
                    </Link>
                    <Link href="/teas">
                        <div className={`${styles.menuItem} ${selectedIndex === 1 ? styles.activeMenuItem : null}`} onClick={() => changeSelectedIndex(1)}>Our Tea</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
