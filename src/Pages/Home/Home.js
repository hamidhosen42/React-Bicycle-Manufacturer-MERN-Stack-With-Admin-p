import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Business_summary from '../Business_summary/Business_summary';
import Manpart from './Manpart';
import Reviews from '../Reviews/Reviews';
import Tools from '../Parts/Parts';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Tools></Tools>
           <Business_summary></Business_summary>
           <Reviews></Reviews>
           <Manpart></Manpart>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;