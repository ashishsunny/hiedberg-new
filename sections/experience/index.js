import Card from '../../components/card'
import styles from './Experience.module.css'
const Experience = () => {
    return ( 
        <div className={styles.experience_container}>
        <h1>Our Experiences</h1>
        <div className={styles.card_container}>
            <div className={styles.card}><Card/></div>
            <div className={styles.card}><Card/></div>
            <div className={styles.card}><Card/></div>
        </div>
      </div>
     );
}
 
export default Experience;