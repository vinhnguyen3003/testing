import React, { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../../contexts/orderContext';
import OrderAdminModal from './order-admin-modal';
import {convertToCurrency} from './../../../utils/currency-method';
import {getFullTime} from './../../../utils/time-method';

function OrderAdminContent() {
    const {orderState: {orders}, getOrders, deleteOrder} = useContext(OrderContext);

    const openOrderModal = (e) => {
        let modalWrapperNode = e.target.parentNode.parentNode.nextSibling.getElementsByClassName('order-admin-modal__wrapper')[0];
        modalWrapperNode.style.display = 'block';
        //e.target.style.pointerEvents = 'none';
        //modalWrapperNode.style.maxHeight = `${modalWrapperNode.scrollHeight}px`;
    }
    useEffect(()=>{getOrders()},[]);
    return (
        <div className="order-admin-content">
            <table>
                <thead>
                    <tr>
                        <th>Số thứ tự</th>
                        <th>Tên khách hàng</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th>Thời gian</th>
                        <th>Tình trạng</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index)=>{
                            const {_id, customerName, createAt, totalAll, orderStatus} = order;
                            let orderStatusText = 'Chưa xử lí';
                            if(orderStatus === 0) orderStatusText = 'Chưa xử lí';
                            if(orderStatus === 1) orderStatusText = 'Đã xử lí';
                            if(orderStatus === 2) orderStatusText = 'Tạm ngưng';
                            //Dùng react fragment để tạo thẻ cha bọc 2 thẻ tr khi muốn dùng với key={index}, nếu k thì cú pháp là <></>
                            return  <React.Fragment key={index}> 
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{customerName}</td>
                                            <td>{totalAll.itemCount}</td>
                                            <td>{convertToCurrency(totalAll.totalPrice)}</td>
                                            <td>{getFullTime(createAt)}</td>
                                            <td>{orderStatusText}</td>
                                            <td>
                                                <span 
                                                    className="btn-order-action"
                                                    onClick={openOrderModal}
                                                >Chi tiết</span>
                                                <span 
                                                    className="btn-order-action"
                                                    onClick={()=>deleteOrder(_id)}
                                                >Xóa</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <OrderAdminModal order={order} index={index}/>
                                        </tr>
                                    </React.Fragment>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default OrderAdminContent;