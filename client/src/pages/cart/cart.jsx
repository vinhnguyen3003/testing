import React, { useEffect } from 'react';
import './stylesheets/cart.scss';
import './stylesheets/cart-responsive.scss';
import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
import SectionBreadcrumb from './components/section-breadcrumb/section-breadcrumb';
import SectionMain from './components/section-main/section-main';
import SectionCheckout from './components/section-checkout/section-checkout';
import CheckOutContextProvider from './contexts/checkoutContext';
import ScrollTopReset from '../../utils/scrollTop-reset';

function Cart() {
    useEffect(()=>{
        ScrollTopReset();
    },[])
    return (
        <div className="app">
            <Header />
            <CheckOutContextProvider>
                <SectionBreadcrumb />
                <SectionMain />
                <SectionCheckout />
            </CheckOutContextProvider>
            <Footer />
        </div>
    );
}

export default Cart;