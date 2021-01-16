import React from 'react'
import { Card, CardBody, CardText, CardFooter } from 'reactstrap';

const CurrentComponent = () => {
    return (
        <div className="container-fluid current" style={{marginBottom: "40px"}}>
            <Card>
                <CardBody className="currentBox">
                <h1 className="text-center" style={{ textShadow: "3px 3px 5px #000", color:"#FE7877"}}>Currently Working On</h1>
                <CardText><a href="https://fullstackopen.com/en/">Full Stack open 2020</a></CardText>
                <CardText>React</CardText>
                <CardText>Communicating with server, REST-API</CardText>
                <CardText>Programming a server with NodeJS and Express</CardText>
                <CardText>Testing Express servers, user administration</CardText>
                <CardText>Testing React apps</CardText>
                <CardText>State management with Redux</CardText>
                <CardText>Custom hooks, styling app with CSS and webpack</CardText>
                <CardText>GraphQL</CardText>
                <CardText>Typescript</CardText>
                <CardText>React Native</CardText>
                <CardText>CI/CD</CardText>
                </CardBody>
                <CardFooter style={{textAlign: "center" }}>Modern Web Development</CardFooter>
            </Card>
           </div>
    )
}

export default CurrentComponent