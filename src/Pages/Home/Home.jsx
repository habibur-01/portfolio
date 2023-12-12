import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Services from './Services/Services';
import Explore from './Services/Explore/Explore';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Explore></Explore>
            <Projects></Projects>
            <Resume></Resume>  
        </div>
    );
};

export default Home;