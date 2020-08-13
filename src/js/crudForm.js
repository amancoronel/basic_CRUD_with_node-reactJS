import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export class crudForm extends Component {
    constructor() {
        super();
        this.state = {
            playerlist : [],
            modalOpen : false,
            action : 0,
            activeData : '',
            newPlayer : {
                name : ''
            },
            search : '',
        }
    }

    addNewPlayer() {
        Axios({
            method: "POST",
            url : "addPlayers",
            data : {
                content : this.state.newPlayer.name
            }
        }).then(response => this.setState({playerlist : response.data}))
    }

    editPlayer(data) {
        console.log("***",data);
        Axios({
            method : "PUT",
            url : "/updatePlayers",
            data
        })
        .then(response => this.setState({playerlist : response.data}))
        .catch(error => console.log(error))

        this.changeAction(0, '')
    }

    deletePlayer() {
        Axios({
            method : "DELETE",
            url : "/deletePlayers",
            data : {
                id:this.state.activeData.id
            }
        })
        .then(response => this.setState({playerlist : response.data}))
        .catch(error => console.log(error))

        this.openModal('');
    }

    changeAction(action, data) {
        let activeData = {...data};
        this.setState({action, activeData});
    }

    openModal(activeData) {
        let modalOpen = !this.state.modalOpen;
        this.setState({modalOpen, activeData});
    }

    handleOnchange(e) {
        this.state[e.target.name].name = e.target.value;
        this.setState({[e.target.name] : this.state[e.target.name]})
    }

    handleOnchangeSingle(e) {
        this.state[e.target.name] = e.target.value;
        this.setState({[e.target.name] : this.state[e.target.name]})
    }

    componentDidMount() {
        Axios({
            method : "GET",
            url: "/getPlayers"
        })
        .then(response => this.setState({playerlist : response.data}))
    }

    render() {
        let title = (this.state.action === 1) ? "Edit Player" : "Add Player";
        let property = (this.state.action === 1) ? this.state.activeData.name : this.state.newPlayer.name;
        let name = (this.state.action === 1) ? "activeData" : "newPlayer";
        let actionButton = (this.state.action == 1) ? <div><Button variant="primary" onClick={e => this.editPlayer(this.state.activeData)} >Save Changes</Button><Button variant="danger" onClick={e => this.changeAction(0, '')} >Cancel</Button></div> : <Button variant="success" onClick={e => this.addNewPlayer()}> Add</Button>
        let filteredUser = this.state.playerlist?.filter(player => player.name.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1)
        return (
            <React.Fragment>
                <Modal show={this.state.modalOpen}
                    openModal={e => this.openModal.bind(this)} 
                    deletePlayer={e => this.deletePlayer.bind(this)} 
                    data={this.state.activeData}/>
                <Container>
                    <Row>
                        <Card className="box-shadow" style={{width : "70%"}}>
                            
                            <Card body>
                                <Card.Title className="text-center">Players List</Card.Title>
                                <input type="text" name="search" value={this.state.search} placeholder="Search Player Name..." onChange={(e) => {this.handleOnchangeSingle(e)} }/>
                                <Table responsive bordered striped hover>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {
                                                filteredUser?.map((player) => {
                                                    return <tr key={player.id}>
                                                        <td>{player.id}</td>
                                                        <td>{player.name}</td> 
                                                        <td>
                                                            <Button variant="primary" onClick={e => this.changeAction(1, player)}>Edit</Button> {' '}
                                                            <Button variant="danger" onClick={e => this.openModal(player)}>Delete</Button> {' '}
                                                            <Link to={`/user/${player.id}`}>
                                                                <Button variant="success">View</Button> {' '}
                                                            </Link>
                                                        </td>
                                                    </tr>

                                                })
                                            }
                                    </tbody>
                                </Table>
                            </Card>
                            
                    </Card>
                    <Card style={{width : "30%"}}>
                        <Card body>                        
                            <Card.Title className="text-center">{title}</Card.Title>
                            <span>Name : </span><input type="text" value={property} name={name} onChange={e => this.handleOnchange(e)}/>{''}
                            {actionButton}
                        </Card>
                    </Card>
                    </Row>
                    
                </Container>

            </React.Fragment>
        )
    }
}

export default crudForm
