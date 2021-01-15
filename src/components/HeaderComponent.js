import React , { Component } from 'react';
import '../styles/HeaderStyle.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button} from 'reactstrap';

class HeaderComponent extends Component {
    constructor(props){
        super(props);


        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
    }
    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
    
   render(){
       return (
    <>
        <div className="container-fluid headerStyle" id="header">
            <div className="row">
                <div className="col-12">
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="#time">Education</NavLink>
                            <NavLink href="#tech">Skills</NavLink>
                            <NavLink href="#project">Projects</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                           
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </div>
            </div>
            <div className="row">
                <div className="col-3 col-md-3">
                        <img src="/assets/images/justme.png" alt="me" className="img-fluid headerImage" />
                </div>
                <div className="col-8 col-md-8" data-aos="flip-up">
                    <h1 className="myName">JEEWAN BHUSAL</h1>
                    <p className="titleStyle">Software Developer</p>
                    <p>
                    <a href="#about"><Button className="more-button">More About Me</Button></a>
                    </p>
                </div>
            </div>
        </div>
    </>
      
        );
    
    }
}



export default HeaderComponent;

