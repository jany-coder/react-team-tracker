import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Team from './../Team/Team';


const Teams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <Row className="mt-5">
            {
                teams.map(team =>
                    <Col md={4} sm={12}>
                        <Team team={team}></Team>
                    </Col>)
            }
        </Row>
    );
};

export default Teams;