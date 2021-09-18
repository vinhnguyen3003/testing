import React, { useContext, useEffect } from 'react';

import SwiperCore, { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductContext } from '../../../../contexts/productContext';
import { Link } from 'react-router-dom';
import { convertToCurrency } from '../../../../utils/currency-method';
import { CartContext } from '../../../../contexts/cartContext';
import { HistoryContext } from '../../../../contexts/historyContext';
SwiperCore.use([Pagination, Scrollbar]);


function SectionPrSimilar() {
    const {productState: {products, productDetail}, getProductsByCondition} = useContext(ProductContext);
    const {addHistory} = useContext(HistoryContext);
    //Filter to abtract product current from similar prroduct
    var newProduct = [];
    if(products !== null && productDetail !== null){
        if(products.length !== 0) newProduct = products.filter(pr => pr._id !== productDetail._id);
    }
    const {addToCart} = useContext(CartContext);
    
    useEffect(()=>{  //console.log("err")
        if(productDetail !== null){
            if(productDetail.category !== undefined) getProductsByCondition(10, `category=${productDetail.category._id}`, 'null', 'null');
        }
    },[productDetail])
    //console.log(products);
    return (
        <section className="section-pr-similar">
            <div className="container section-pr-similar__wrapper">
                <div className="section-pr-similar-title">Xem thêm hoa khác</div>
                {
                    newProduct.length === 0 ? 
                        <div className="section-pr-similar-null">Không có sản phẩm tương tự nào khác</div> :
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 15,
                            },
                        }}
                    >
                        {
                            newProduct.map((pr, index)=>{
                                const {productImage, productName, productPrice, ratingStar, _id} = pr;
                                const starRating = [];
                                for(var i = 0; i < ratingStar; i++){
                                    starRating.push(<i className="fas fa-star" key={i}/>)
                                }
                                for(var j = 0; j < 5 - ratingStar; j++){
                                    starRating.push(<i className="far fa-star" key={i+j}/>)
                                }
                                return <SwiperSlide key={index}>
                                        <div className="product-item pr-item-slide">
                                            <div className="product-item-image">
                                                <Link 
                                                    to={`/product-detail/${_id}`} 
                                                    className="image-link"
                                                    onClick={()=>addHistory(pr)}
                                                >
                                                    <img src={productImage.mainImage.url} alt="" />
                                                </Link>
                                                <div className="image-tool">
                                                    <span>
                                                        <i className="fas fa-plus" />
                                                    </span>
                                                    <span>
                                                        <i className="far fa-heart" />
                                                    </span>
                                                </div>
                                                {
                                                    pr.productPrice.discountPrice !== 0 ?
                                                        <span className="sale-label">
                                                            <span>SALE!</span>
                                                        </span> : ''
                                                }
                                            </div>
                                            <div className="product-item-content">
                                                <Link 
                                                    to={`/product-detail/${_id}`} 
                                                    className="content-name"
                                                    onClick={()=>addHistory(pr)}
                                                >
                                                    {productName}
                                                </Link>
                                                <div className="content-star">
                                                    {starRating}
                                                </div>
                                                <span className="line line-top" />
                                                <div className="content-promotion">
                                                    <h4 className="promotion-title">Khuyến Mãi</h4>
                                                    <div className="promotion-content">
                                                        <span>Miễn phí giao hàng toàn quốc</span>
                                                        <span>Tặng 1 khi mua 2 sản phẩm</span>
                                                    </div>
                                                </div>
                                                <span className="line line-bottom" />
                                                <div className="content-price">
                                                    <span className="discount-price">
                                                        { productPrice.discountPrice === 0 ? 
                                                            convertToCurrency(productPrice.normalPrice) :
                                                            convertToCurrency(productPrice.discountPrice)
                                                        }
                                                    </span>
                                                    {
                                                        productPrice.discountPrice !== 0 ?
                                                        <span className="normal-price">
                                                            {convertToCurrency(productPrice.normalPrice)}
                                                        </span> : ''
                                                    }
                                                </div>
                                                <div className="content-btn-add">
                                                    <span className="btn btn--green" 
                                                        onClick={()=>addToCart(pr, 1)}
                                                    >Thêm vào giỏ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                            })
                        }
                        
                    </Swiper>
                }
            </div>
        </section>
    );
}

export default SectionPrSimilar;