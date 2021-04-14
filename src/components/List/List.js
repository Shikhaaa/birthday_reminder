import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { birthdays } from './../../Data.js';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './List.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            birthdayList: [],
            noBirthdayToday: true,
            count: 0

        };
    }

    componentDidMount() {
        let { birthdayList, count } = this.state;
        birthdays.map((bir, index) => {
            birthdayList[index] = bir;
            count++;
        })
        this.setState({ birthdayList, noBirthdayToday: true, count });
    }

    birthdayListClear = () => {
        this.setState({
            birthdayList: [],
            noBirthdayToday: false
        })
    }

    render() {

        return (<>


            {this.state.noBirthdayToday ?
                <div>
                    <Card style={{ width: '30rem', height: '48rem' , boxShadow:"3px 3px"}}>

                        <Card.Body>
                            <h3 style={{ textAlign: "left" }}>{this.state.count} birthdays today</h3>

                            {birthdays.map((bir, index) => {
                                const { name, age, img } = bir;


                                return (

                                    <div>
                                        <Row>
                                            <Col sm="25%" style={{ marginTop: "30px" }}>
                                                <img src={img} style={{ width: "80px", height: "80px" }} alt="images" className="profile-pic"></img>
                                            </Col>
                                            <Col>
                                                <h5 style={{ textAlign: "left", marginTop: "43px", fontWeight: "bold" }}>{name}</h5>
                                                <h5 style={{ textAlign: "left" }}>{age} years</h5>
                                            </Col>
                                        </Row>

                                    </div>

                                );

                            })}
                            <Button variant="primary" className="mybtn" onClick={this.birthdayListClear} style={{ backgroundColor: '#e75480' }}>Clear All</Button>



                        </Card.Body>

                    </Card>
                </div>
                : <div>
                    <Card style={{ width: '20rem', height: '10rem' }}>

                        <Card.Body>




                            <div>
                                <h1>No Birthdays Today!!</h1>

                            </div>






                        </Card.Body>
                    </Card>
                </div>}



        </>);
    }
}
export default List;
