import React, { Component } from 'react';
import { Header } from './header/Header';
import styles from '../../sass/Base.module.scss'
import {Footer} from './footer/Footer';

export class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className={styles.body}>
        <Header />
        <div className={styles.appBody}>
            {children}
        </div>
        <Footer/>
      </div >
    );
  }
}
