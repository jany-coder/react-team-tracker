import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import banner from '../../asset/banner.png';
import './TeamDetail.css';
import { Container } from 'react-bootstrap';

const TeamDetail = () => {

    const { idTeam } = useParams();
    const [teamDetail, setTeamDetail] = useState({})
    const { strTeamBadge, strAlternate, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strTeamJersey } = teamDetail;

    console.log()

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]))
            .catch(err => console.log(err))
    }, [idTeam])
    return (

        <>
            <div className="banner">
                <img src={banner} alt="" />
                <div className="centered"><img style={{ width: '170px' }} src={strTeamBadge} alt="" /></div>
                <div className="img-layer"></div>
            </div>
            <Container className="mt-5">
                <div className="cart-container">
                    <div>
                        <h4>{strAlternate}</h4>
                        <p><small>Founded: {intFormedYear} </small></p>
                        <p><small>Country: {strCountry}</small></p>
                        <p><small>Sport Type: {strSport} </small></p>
                        <p><small>Gender: {strGender} </small></p>
                    </div>
                    <div>
                        <img style={{ width: '170px' }} src={strTeamJersey} alt="" />
                    </div>
                </div>

                <div className="mt-5">
                    <p>
                        {strDescriptionEN}
                    </p>
                </div>
            </Container>
        </>
    );
};

export default TeamDetail;