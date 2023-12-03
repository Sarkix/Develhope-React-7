import React from 'react';
import styles from './Welcome.module.css';
import Age from './Age';

function Welcome({ name, age }) {
  return (
    <p className={styles.welcome}>
      Welcome, <strong>{name}</strong>! <Age age={age} />
    </p>
  );
}

export default Welcome;
