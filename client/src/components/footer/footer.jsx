import React from 'react';
import './stylesheets/footer.scss';
import './stylesheets/footer-responsive.scss';
import PaypalIconImage from './images/paypal.png';
import VisaIconImage from './images/visa.png';
import AmeIconImage from './images/ame-express.png';
import MasterIconImage from './images/master-card.png';
import LogoImage from './images/logo-edit.png';
//import PropTypes from 'prop-types';

Footer.propTypes = {};

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer-top">
                    <ul className="footer-top__payment">
                        <li className="payment-item">
                            <a href="#vv" className="payment-item__link">
                                <img src={PaypalIconImage} alt="" />
                            </a>
                        </li>
                        <li className="payment-item">
                            <a href="#vv" className="payment-item__link">
                                <img src={VisaIconImage} alt="" />
                            </a>
                        </li>
                        <li className="payment-item">
                            <a href="#vv" className="payment-item__link">
                                <img src={AmeIconImage} alt="" />
                            </a>
                        </li>
                        <li className="payment-item">
                            <a href="#vv" className="payment-item__link">
                                <img src={MasterIconImage} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-body">
                    <div className="footer-body__left">
                        <div className="body-left-heading">
                            <img src={LogoImage} alt="" />
                        </div>
                        <div className="body-left-content">
                            <div className="content-address">
                                <i className="fas fa-map-marker-alt" />
                                999, C??ch M???ng Th??ng 8, Qu???n 10, TP.HCM
                            </div>
                            <div className="content-phone">
                                <i className="fas fa-phone" />
                                +84 999 888 777
                            </div>
                            <div className="content-email">
                                <i className="fas fa-envelope" />
                                vnflower@gmail.com
                            </div>
                        </div>
                        <div className="body-left__footer">
                            <ul className="footer-contact-list">
                                <li className="contact-item">
                                    <a href="#vv" className="contact-item__link">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="contact-item">
                                    <a href="#vv" className="contact-item__link">
                                        <i className="fab fa-youtube" />
                                    </a>
                                </li>
                                <li className="contact-item">
                                    <a href="#vv" className="contact-item__link">
                                        <i className="fab fa-google-plus-g" />
                                    </a>
                                </li>
                                <li className="contact-item">
                                    <a href="#vv" className="contact-item__link">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </li>
                                <li className="contact-item">
                                    <a href="#vv" className="contact-item__link">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-body__right">
                        <div className="body-right-col">
                        <div className="col-title">Tr??? Gi??p</div>
                        <ul className="col-list">
                            <li className="col-list__item">
                            <a href="#vv">
                                <i className="far fa-circle" />
                                ?????t H??ng
                            </a>
                            </li>
                            <li className="col-list__item">
                            <a href="#vv">
                                <i className="far fa-circle" />
                                Thanh To??n
                            </a>
                            </li>
                            <li className="col-list__item">
                            <a href="#vv">
                                <i className="far fa-circle" />
                                Giao H??ng
                            </a>
                            </li>
                            <li className="col-list__item">
                            <a href="#vv">
                                <i className="far fa-circle" />
                                Ch??nh S??ch
                            </a>
                            </li>
                            <li className="col-list__item">
                            <a href="#vv">
                                <i className="far fa-circle" />
                                Tuy???n D???ng
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="body-right-col">
                            <div className="col-title">Th??ng Tin</div>
                            <ul className="col-list">
                                <li className="col-list__item">
                                    <a href="#vv">
                                        <i className="far fa-circle" />
                                        VnFlower
                                    </a>
                                </li>
                                <li className="col-list__item">
                                    <a href="#vv">
                                        <i className="far fa-circle" />
                                        Li??n H???
                                    </a>
                                </li>
                                <li className="col-list__item">
                                    <a href="#vv">
                                        <i className="far fa-circle" />
                                        H???p T??c
                                    </a>
                                </li>
                                <li className="col-list__item">
                                    <a href="#vv">
                                        <i className="far fa-circle" />
                                        Nh?? Cung C???p
                                    </a>
                                </li>
                                <li className="col-list__item">
                                    <a href="#vv">
                                        <i className="far fa-circle" />
                                        T??m Ki???m
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="body-right-col">
                            <div className="col-title">Tin T???c</div>
                            <ul className="col-list">
                                <li className="col-list__item">
                                    <a href="#vv">
                                        <i className="far fa-circle" />
                                        Khuy???n M??i
                                    </a>
                                </li>
                                <li className="col-list__item">
                                    <a href="#vv">
                                        <i className="far fa-circle" />
                                        Xu H?????ng Hi???n Nay
                                    </a>
                                </li>
                                <li className="col-list__item">
                                    <a href="#vv">
                                        <i className="far fa-circle" />
                                        Gi?? Hoa
                                    </a>
                                </li>
                                <li className="col-list__item">
                                    <a href="#vv">
                                        <i className="far fa-circle" />
                                        B?? Quy???t &amp; M???o V???t
                                    </a>
                                </li>
                                <li className="col-list__item">
                                    <a href="#vv">
                                        <i className="far fa-circle" />
                                        Voucher
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>??2021 Website is created by Vinh Nguyen</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;