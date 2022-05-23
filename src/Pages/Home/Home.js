import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Services from './Services';
import Business_summary from '../Business_summary/Business_summary';
import Manpart from './Manpart';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Business_summary></Business_summary>
           <Services></Services>
           <Reviews></Reviews>
           <Manpart></Manpart>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;