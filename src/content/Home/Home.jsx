import React ,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../container/Layout/Layout';
import './Home.scss'



class HomePage extends Component{
    // componentWillUnmount(){
    //     localStorage.setItem("lastRoute", window.location.href)
    // }
    
    render(){
        return(
            <Layout title="Halaman Home">
                
            </Layout>
        )
    }
}

export default HomePage;
