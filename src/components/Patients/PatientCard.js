import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {ClipboardData, GenderMale, GenderFemale} from 'react-bootstrap-icons';
import Activity from './../../images/activity.svg';

import PredictionModal from "./../PredictionModal/PredictionModal";
import StatModal from './../StatModal/StatModal';

import banana from "../../images/banana.jpg";

import './PatientCard.css';


function PatientCard(props) {

    var patient = props.patient ?? {};

    const [pShow, setPShow] = useState(false);

    const handlePClose = () => setPShow(false);
    const handlePShow = () => setPShow(true);

    const [sShow, setSShow] = useState(false);

    const handleSClose = () => setSShow(false);
    const handleSShow = () => setSShow(true);

    return (
        <div className = "PatientCard">
            <Card border="secondary" style={{ borderWidth: '5px' }}>
                <Card.Img className='CardImage' variant="top" src={banana}/>
                <hr/>
                <Card.Body>
                    <Card.Title>
                        <div className="StatTitle">
                            <div>{patient.Name ?? "Example"}</div>
                        <div class="alignright">
                            {patient.Sex == 'M' ? <GenderMale color="royalblue"/> :
                                <GenderFemale color="hotpink"/>}
                        </div>
                        </div>
                    </Card.Title>
                   
                    <hr/>

                    <div className='Stats'>
                        <div className='StatCol'>
                            <div className="Stat">
                                <ClipboardData class="alignleft"/>
                            </div>
                            <div className="Stat">
                                <div class="alignleft">Age (yrs):</div>
                                <b class="alignright">{patient.Age}</b>
                            </div>
                            <div className="Stat">
                                <div class="alignleft">Height (in):</div>
                                <b class="alignright">{patient.height}</b>
                            </div>
                            <div className="Stat">
                                <div class="alignleft">Weight (lbs):</div>
                                <b class="alignright">{patient.bodyWeight}</b>
                            </div> 
                        </div>
                        <div className='StatCol'>
                            <img src={Activity} />
                            <div className="Stat">
                                <div class="alignleft">Rest (BPM):</div>
                                <b class="alignright">{patient.RestingBP}</b>
                            </div> 
                            <div className="Stat">
                                <div class="alignleft">Max (BPM):</div>
                                <b class="alignright">{patient.MaxHR}</b>
                            </div> 
                            <div className="Stat">
                                <div class="alignleft">Cho: (mg/dL):</div>
                                <b class="alignright">{patient.Cholesterol}</b>
                            </div> 
                        </div>
                    </div>

                    <div className="ButtonGrouping">
                        <Button variant="secondary" onClick={handleSShow}>
                            More Stats
                        </Button>
                        <Button  variant="secondary" onClick={handlePShow}>
                            Run Prediction
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <PredictionModal patient={patient} show={pShow} handleClose={handlePClose}/>
            <StatModal patient={patient} show={sShow} handleClose={handleSClose}/>
        </div>
    );
}

export default PatientCard;

