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
        <Heading sx={style.subTitle}>Our Core Expertise</Heading>
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

const style={
    subTitle: {
        fontSize: [5, null, '30px'],
        color: 'primary',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontWeight: '700',
        mb: [6, null, null, null, 8],
        mt: [8, null, null, null, 10],
        lineHeight: 1.5,
      }
}
 
export default Experience;