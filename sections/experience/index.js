import Card from '../../components/card'
import styles from './Experience.module.css'
import Data from '../../data/data.experience'
const Experience = () => {
    return ( 
        <div className={styles.experience_container}>
        <h1 className={styles.experience_heading}>Our Experiences</h1>
        <div className={styles.card_container}>
            {
                Data.map((card)=>{
                    return(<div className={styles.card}><Card id={card.id} title={card.title} description={card.description} text={card.text}/></div>)
                })      
            }
        </div>
      </div>
     );
}
 
export default Experience;