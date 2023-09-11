import Hero2 from '../../sections/hero'
import PartnerSection from '../../components/map';
import SecurePayment from '../../components/secure'
const About = () => {
    return ( 
        <div style={{backgroundColor:"#29508743"}}>
            <Hero2 />
            <PartnerSection/>
            <SecurePayment page="about"/>
        </div>
     );
}
 
export default About;