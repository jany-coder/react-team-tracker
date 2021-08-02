import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Team.css';
import { useHistory } from 'react-router-dom';

const Team = (props) => {
    const {strTeamBadge, strTeam, strSport, idTeam} = props.team;

    const history = useHistory();
    
    const handleTeamDetail = (id) => {
        history.push(`/team/${id}`)
    }
    return (
        <div className="team-cart text-center">
            <img src={strTeamBadge} alt="" />
            <h3>{strSport}</h3>
            <p>Sports Type: {strTeam}</p>
            <Button onClick={()=> handleTeamDetail(idTeam)}>Explore <span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></Button>
        </div>
    );
};

export default Team;