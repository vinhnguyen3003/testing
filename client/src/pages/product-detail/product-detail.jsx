import React, { useContext, useEffect } from 'react';
import './stylesheets/product-detail.scss';
import './stylesheets/product-detail-responsive.scss';
import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
import SectionBreadcrumb from './components/section-breadcrumb/section-breadcrumb';
import SectionMain from './components/section-main/section-main';
import SectionTab from './components/section-tab/section-tab';
import SectionPrSimilar from './components/section-pr-similar/section-pr-similar';
import ScrollTopReset from '../../utils/scrollTop-reset';
import { ProductContext } from '../../contexts/productContext';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const {getProductDetail, destroyGetProduct} = useContext(ProductContext);

    const params = useParams();
    useEffect(()=>{
        ScrollTopReset();
        destroyGetProduct();
        getProductDetail(params.id);
        return function cleanup(){
            destroyGetProduct();
        }
    },[params])
    return (
        <div className="app">
            <Header />
            <SectionBreadcrumb />
            <SectionMain />
            <SectionTab />
            <SectionPrSimilar />
            <Footer />
        </div>
    );
}

export default ProductDetail;