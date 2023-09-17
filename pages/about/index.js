import Hero2 from '../../components/hero'
import PartnerSection from '../../components/map';
import SecurePayment from '../../components/secure'
const About = () => {
    return ( 
        <div style={{backgroundColor:"#29508743"}} id="about">
            <Hero2/>
            <PartnerSection/>
            <SecurePayment page="about"/>
        </div>
     );
}
 
export default About;