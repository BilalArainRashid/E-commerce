import React, { useState, useEffect } from 'react';
import Navbar from '../../navbar/mainNavbar/Navbar'
import ItemView from './productviewcomponents/ItemView'
import SimilarItem from './productviewcomponents/SimilarItem'
import ItemAvailable from './productviewcomponents/ItemAvailable'
import Image from './productviewcomponents/Image'
import Customer from './productviewcomponents/Customer'
import ExtraInfo from '../../body/productList/ExtraInfo'
import MainFooter from '../../footer/MainFooter'
import BottomFooter from '../../footer/BottomFooter'
import Loader from '../../loader/Loader';
import Top from '../../../common/Top';

import NewArrivalSlider from '../../body/newArrival/NewArrivalSlider';

const ProductView = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // set loading to false after 2 seconds
    }, []);
    return (
        <div>
            {isLoading ? (
                <Loader/>
            ) : (
                <div>
                    <Navbar />
                    <ItemView />
                    <SimilarItem />
                    <ItemAvailable />
                    <Image />
                    <Customer />
                    <NewArrivalSlider />
                    <Top />
                    <ExtraInfo />
                    <MainFooter />
                    <BottomFooter />
                </div>
            )}
        </div>

    )
}

export default ProductView