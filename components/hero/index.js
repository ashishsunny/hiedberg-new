import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.hero}>
    <div className={styles.overlay}></div>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_heading}>Welcome to Your Business</h1>
        <p className={styles.hero_para}>Your message or slogan goes here.</p>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Know More</button>
      </div>
    </section>
  );
};

export default Hero;