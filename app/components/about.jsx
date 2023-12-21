import styles from './dashboard.module.scss'

const About = () => {
  const name = "Akshita Patel"
  return (
    <div className={styles.about}>
      <h2>Welcome Back, {name.split(' ')[0]}</h2>
      <p>Here is today's report and performance</p>
    </div>
  );
};

export default About;