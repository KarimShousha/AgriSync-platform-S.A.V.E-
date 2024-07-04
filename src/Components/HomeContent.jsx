import { Fragment } from 'react';
import './css/homeContent.css';
import homepic1 from './home-1.jpg'
import pivot1 from '../images/pivot1.jpg'
import pivot2 from '../images/pivot2.jpg'

export default function HomeContent(){
    return(
        <Fragment className="home-content">
         {/* <h1>Electronics and Communications department Project Web Application (Smart Clean Farm) </h1>
        <p>At Smart Clean Farm, we are revolutionizing the future of farming. Our mission is to combine cutting-edge technology with sustainable practices to create a cleaner, smarter, and more efficient farming experience.</p>
        <p> We believe in the power of innovation to transform agriculture. Our advanced farming solutions leverage the latest in AI and IoT technologies to optimize crop growth, reduce waste, and increase overall yield.</p>
        <p>But we’re not just about technology. We’re also deeply committed to sustainability. Our smart farming methods minimize the use of water and fertilizers, reducing our environmental footprint and making agriculture more sustainable for future generations.</p>
        <p>Join us on our journey to make farming smarter, cleaner, and greener. Welcome to the future of agriculture. Welcome to Smart Clean Farm.</p>  
        <h3>Supervised by Prof/ Heba Youssef Soliman</h3>  */}
    <div className="HPic-1">
    <div className="image1">
    <div className="home1card">
        <h2 className='pivotHeader'>AgriSync Platform</h2>
        <p>AgriSync streamlines irrigation management, providing real-time insights and precision control for optimal crop yield.</p>
    </div>
    </div>
    </div>

    <div class="black-section">
    <div class="info-block">
        <h2>01</h2>
        <h3>Efficient Watering for Thriving Crops</h3>
        <p>Pivot irrigation systems deliver water in a precise,
        rotating pattern, minimizing waste and ensuring every part of your field receives the moisture it needs for optimal growth.</p>
    </div>
    <div class="info-block">
        <h2>02</h2>
        <h3>Boosting Yields, One Circle at a Time</h3>
        <p> By providing consistent watering,
        pivot irrigation allows you to maximize crop yields.  This translates to a more profitable harvest and a greater return on your investment.</p>
    </div>
</div>


<div className='ThirdSection'>
    <div className="contentBlock">
        <img src={pivot1} alt="pivot1" className='pivot1' />
        <div className="textBlock">
            <h2>03</h2>
            <h3>Boosting Yields, One Circle at a Time</h3>
            <p>By providing consistent watering,
            pivot irrigation allows you to maximize crop yields. This translates to a more profitable harvest and a greater return on your investment.</p>
        </div>
    </div>

    <div className="contentBlock">
        <img src={pivot2} alt="pivot2" className='pivot2' />
        <div className="textBlock">
            <h2>04</h2>
            <h3>Boosting Yields, One Circle at a Time</h3>
            <p>By providing consistent watering,
            pivot irrigation allows you to maximize crop yields. This translates to a more profitable harvest and a greater return on your investment.</p>
        </div>
    </div>
</div>



        </Fragment>
    );
}