import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import './Header.scss'
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination, EffectCoverflow]);

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        document.title = props.title;
        this.state = {
            slides: [],
            nav: false,
            menuChurch: false,
            menuMinistries: false,
            menuCommunity: false,
            menuGrow: false,
            menuCare: false
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 140) {
            if (!this.state.nav) {
                this.setState({ nav: true });
            }
        } else {
            if (this.state.nav) {
                this.setState({ nav: false });
            }
        }
    }

    showDropdownChurch = (e) => {
        this.setState({ menuChurch: true })
    }
    hideDropdownChurch = (e) => {
        this.setState({ menuChurch: false })
    }

    showDropdownMinistries = (e) => {
        this.setState({ menuMinistries: true })
    }
    hideDropdownMinistries = (e) => {
        this.setState({ menuMinistries: false })
    }
    
    showDropdownCommunity = (e) => {
        this.setState({ menuCommunity: true })
    }
    hideDropdownCommunity = (e) => {
        this.setState({ menuCommunity: false })
    }

    showDropdownGrow = (e) => {
        this.setState({ menuGrow: true })
    }
    hideDropdownGrow = (e) => {
        this.setState({ menuGrow: false })
    }
    
    showDropdownCare = (e) => {
        this.setState({ menuCare: true })
    }
    hideDropdownCare = (e) => {
        this.setState({ menuCare: false })
    }

    render() {
        return (
            <React.Fragment>
                {/* <div className="top-area">
                    <a href><span className="live">Live Streaming,</span><span className="time-live">15 Agustus 2021</span></a>
                </div> */}
                
                <div className="container-logo-top">
                    {/* Logo Section */}
                    <a className="logo-prj">
                        <img src="https://www.gbiprj.org/img/logo.jpg" className="img-logo" />
                        <div className="container-text-logo">
                            <p className="text-church-name">GBI PRJ CK7</p>
                            <p className="text-church-desc">Praise Revival for Jesus</p>
                            
                        </div>
                    </a>
                    {/* End of Logo */}
                    
                    {/* Location Section */}
                    <div className="section-icon-top">
                        <i className="fas fa-map-marker-alt icon-header-area"></i>
                        <div className="container-text-icon">
                            <h6 className="text-icon-title">integrity convention centre</h6>
                            <p className="text-icon-desc">Mall MGK Lt.9</p>
                        </div>
                    </div>
                    {/* End of Location */}
                    
                    {/* Phone Section */}
                    
                    <div className="section-icon-top contact">
                        <i className="fas fa-phone icon-header-area icon-phone"></i>
                        <div className="container-text-icon">
                            <h6 className="text-icon-title">contact</h6>
                            <p className="text-icon-desc"><span className="mr-2">021</span> <span className="mr-2">2605</span> 1888</p>
                        </div>
                    </div>
                    {/* End of Phone Section */}
                    
                    {/* Ministry Time Section */}
                    <div className="section-icon-top time-ministries">
                        <i className="fas fa-clock icon-header-area icon-clock"></i>
                        <div className="container-text-icon">
                            <h6 className="text-icon-title">worship service</h6>
                            <p className="text-icon-desc">07.00 - 16.30 WIB</p>
                        </div>
                    </div>
                    {/* End of Ministry Time Section */}
                </div>
                
                
                <Navbar collapseOnSelect expand="lg" className={`bg-navbar-custom text-white ${this.state.nav && 'nav_fixed'} `} >
                    <Container className="navbar-custom">
                        <Navbar.Brand href="#home" className="hidden-brand">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"><i className="fas fa-bars" style={{ color: '#fff' }}></i></Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto text-white">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="Church" id="collasible-nav-dropdown" className="dropdown-church" show={this.state.menuChurch} onMouseEnter={this.showDropdownChurch}
                                    onMouseLeave={this.hideDropdownChurch}>
                                    <NavDropdown.Item href="/pastors">
                                        Pastors
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/gbi-gatot-subroto">GBI Jl. Gatot Subroto</NavDropdown.Item>
                                    <NavDropdown.Item href="/history-ck7">History CK7</NavDropdown.Item>
                                    <NavDropdown.Item href="/vision-mission">Vision, Mission, Culture CK7</NavDropdown.Item>
                                    <NavDropdown.Item href="/ck7-group">CK7 Group</NavDropdown.Item>
                                    <NavDropdown.Item>Sikap Teologis GBI</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Ministries" id="collasible-nav-dropdown" className="dropdown-ministries" show={this.state.menuMinistries} onMouseEnter={this.showDropdownMinistries}
                                    onMouseLeave={this.hideDropdownMinistries}>
                                    <NavDropdown.Item href="/ibadah-umum">Ibadah Umum</NavDropdown.Item>
                                    <NavDropdown.Item href="/ibadah-bpa">Ibadah BPA</NavDropdown.Item>
                                    <NavDropdown.Item href="/ibadah-khusus">Ibadah Khusus</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Community" id="collasible-nav-dropdown" className="dropdown-community" show={this.state.menuCommunity} onMouseEnter={this.showDropdownCommunity}
                                    onMouseLeave={this.hideDropdownCommunity}>
                                    <NavDropdown.Item href="/cool">Community Of Love</NavDropdown.Item>
                                    <NavDropdown.Item href="/gema">Gemar Baca Alkitab</NavDropdown.Item>
                                    <NavDropdown.Item href="/dads-fo-live">Dad's For Live Indonesia</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Grow" id="collasible-nav-dropdown" className="dropdown-grow" show={this.state.menuGrow} onMouseEnter={this.showDropdownGrow}
                                    onMouseLeave={this.hideDropdownGrow}>
                                    <NavDropdown.Item href="/doa-fajar">Doa Fajar</NavDropdown.Item>
                                    <NavDropdown.Item href="/menara-doa">Menara Doa</NavDropdown.Item>
                                    <NavDropdown.Item href="/kom">Kehidupan Orientasi Melayani</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="We Care" id="collasible-nav-dropdown" className="dropdown-care" show={this.state.menuCare} onMouseEnter={this.showDropdownCare}
                                    onMouseLeave={this.hideDropdownCare}>
                                    <NavDropdown.Item href="/doa-caring">Doa & Caring</NavDropdown.Item>
                                    <NavDropdown.Item href="/baptisan">Baptisan</NavDropdown.Item>
                                    <NavDropdown.Item href="/penyerahan-anak">Penyerahan Anak</NavDropdown.Item>
                                    <NavDropdown.Item href="/pemberkatan-nikah">Pemberkatan Nikah</NavDropdown.Item>
                                    <NavDropdown.Item href="/penghiburan">Penghiburan</NavDropdown.Item>
                                    <NavDropdown.Item href="/pemberkatan-others">Pemberkatan Rumah / Tempat Usaha</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/give">Give</Nav.Link>
                                <Nav.Link href="/contact-us">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </React.Fragment>

        )
    }
}