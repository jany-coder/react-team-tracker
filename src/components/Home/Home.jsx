import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../asset/banner.png';
import './Home.css';
import Teams from './../Teams/Teams';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="" />
                <div className="centered"><h1>Team Tracker</h1></div>
                <div className="img-layer"></div>
            </div>
            <Container>
                <Teams></Teams>
            </Container>
        </div>
    );
};

export default Home;