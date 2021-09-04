import React from 'react';
import './Footer.scss';

export default class FooterComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listSocmed: [
                {
                    iconName: 'fab fa-youtube',
                    class: 'bg-youtube',
                    target: 'https://www.youtube.com/c/GBIPRJCK7?sub_confirmation=1'
                },
                {
                    iconName: 'fab fa-facebook',
                    class: 'bg-facebook',
                    target: 'https://www.facebook.com/gbiprj.jakarta.church/'
                },
                {
                    iconName: 'fab fa-instagram',
                    class: 'bg-instagram',
                    target: 'https://www.instagram.com/gbiprj/'
                },
                {
                    iconName: 'far fa-envelope',
                    class: 'bg-email',
                    target: 'mailto:sekretaris.gbiprj@gmail.com'
                },
                
            ]
        }
    }
    
    render(){
        return(
            <div className="flex-center-cwh" id="footer-area">
                    <div className="container-footer-atas">
                        <a href="/">
                            <img src="https://www.gbiprj.org/img/logo.jpg" alt="" width={80} height={80} />
                            <p className="title-footer">
                                gbi prj (ck7)
                            </p>
                        </a>
                        <ul className="list-socmed">
                            {
                                this.state.listSocmed.map(sosmed => {
                                    return  <li>
                                                <a href={sosmed.target} className={sosmed.class}>
                                                    <i className={sosmed.iconName}></i>
                                                </a>
                                            </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="container-footer-bawah">
                        <span>
                            © copyright by <span className="prod-copyright" style={{ marginLeft: '5px' }}>GBI PRJ (CK7)</span>
                        </span>
                    </div>
                </div>
        )
    }
}