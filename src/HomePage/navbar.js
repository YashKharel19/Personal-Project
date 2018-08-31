import React ,{Component }from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import '../animate.css';
import Logo from '../assets/logosample.svg'

export default class NavBar extends Component{
 constructor(props){
    super(props);
    this.state = {
      background: 'transparent',
      opacity:1,
      activeKey:0,
    };
 }
 listenScrollEvent = e => {
   if (window.scrollY > 640) {
       this.setState({background:'#5A8C89',opacity:0.9})
   }
   else {
     this.setState({background: 'transparent',opacity:1})
   }
 }
 handleSelect(selectedKey){
   this.setState({
     activeKey:selectedKey
   });
 }
 componentDidMount() {
   window.addEventListener('scroll', this.listenScrollEvent);
 }
 componentWillMount(){
    const menuname = window.location.pathname;
    switch(true) {
     case menuname.startsWith('/aboutus'):
         this.setState({activeKey:2});
         break;
     case menuname.startsWith('/product'):
             this.setState({activeKey:3});
             break;
     case menuname.startsWith('/career'):
         this.setState({activeKey:4});
         break;
     case menuname.startsWith('/blog'):
         this.setState({activeKey:5});
         break;
     default:
      this.setState({activeKey:1});
    }
  }
 render(){
    return(
      <div className="App container">
        <Navbar fluid fixedTop collapseOnSelect style={{background:this.state.background,opacity:this.state.opacity}}>
          <Navbar.Header>
            <Navbar.Brand className="animated fadeInLeft">
              <a href="/" className='logo'><img src={Logo} alt='logo' width='40px' height='40px' /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight
                activeKey={this.state.activeKey}
                onSelect={k => {this.handleSelect(k)} }
            >
              <NavItem className="nav-items" id="elm" eventKey={1} componentClass={ NavLink } href='/' to='/' exact={true}>HOME</NavItem>
              <NavItem className="nav-items" eventKey={2} componentClass={ NavLink } href='/aboutus' to='/aboutus' exact={true}>ABOUT US</NavItem>
              <NavItem className="nav-items" eventKey={3} componentClass={ NavLink } href='/product' to='/product' exact={true}>PRODUCTS</NavItem>
              <NavItem className="nav-items" eventKey={4} componentClass={ NavLink } href='/career' to='/career' exact={true}>CAREER</NavItem>
              <NavItem className="nav-items" eventKey={5} componentClass={ NavLink } href='/blog' to='/blog' exact={true}>BLOG</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
