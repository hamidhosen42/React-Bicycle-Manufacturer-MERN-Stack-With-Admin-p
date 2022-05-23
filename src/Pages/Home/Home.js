import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatmant from './Treatmant';
import Business_summary from '../Business_summary/Business_summary';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Business_summary></Business_summary>
           <Info></Info>
           <Services></Services>
           <Treatmant></Treatmant>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;