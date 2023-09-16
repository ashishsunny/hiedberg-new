/** @jsxImportSource theme-ui */
import Card from '../../components/card'
import styles from './Experience.module.css'
import Data from '../../data/data.experience'
import {
    Heading,
  } from 'theme-ui'
const Experience = () => {
    return ( 
        <div>
        {/* style={{ backgroundImage:"url(/assets/dot-pattern.svg)"}} */}
        <div className={styles.experience_container} >
        <Heading as="h1" variant="experiencesHeader">Our Core Expertise</Heading>
        <div className={styles.card_container}>
            {
                Data.map((card)=>{
                    return(<div className={styles.card}><Card id={card.id} title={card.title} description={card.description} text={card.text}/></div>)
                })      
            }
        </div>
      </div>
      </div>
     );
}
 
export default Experience;