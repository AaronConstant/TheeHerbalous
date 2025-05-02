import React from 'react';
import '../Styles/HomeStyling.scss';
import RevolvingBanner from './RevolvingBanner';
const Home: React.FC = () => {
    return (
        <div id="home">
            <h1>Welcome to Thee Herbalous!</h1>
            <RevolvingBanner />
        </div>
    );
};

export default Home;