import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.hero}>
    <div className={styles.overlay}></div>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_heading}>Welcome to Your Business</h1>
        <p className={styles.hero_para}>Your message or slogan goes here.</p>
        <button className={styles.cta_button}>Learn More</button>
      </div>
    </section>
  );
};

export default Hero;