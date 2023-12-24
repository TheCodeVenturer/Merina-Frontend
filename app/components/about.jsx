'use client'
import { useAppState } from '../context/stateContext';
import styles from './dashboard.module.scss'

const About = () => {
  const {user} = useAppState()
  return (
    <div className={styles.about}>
      <h2>Welcome Back, {`${user && user.name && user.name.split(' ')[0]}`}</h2>
      <p>Here is today{`'`}s report and performance</p>
    </div>
  );
};

export default About;