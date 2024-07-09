import { Fragment } from 'react';
import './css/homeContent.css';
import homepic1 from './home-1.jpg'
import pivot1 from '../images/pivot1.jpg'
import pivot2 from '../images/pivot2.jpg'

export default function HomeContent(){
    return(
        <Fragment className="home-content">
    <div className="HPic-1">
    <div className="image1">
    <div className="home1card">
        <h2 className='pivotHeader'>AgriSync Platform</h2>
        <p>AgriSync streamlines irrigation management, providing insights and precision control for optimal crop yield.</p>
        <h3>Supervised by Dr. Heba Youssef Soliman</h3>
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
            <h3>Crop Health Monitoring</h3>
            <p>AgriSync integrates cameras and sensors to detect anomalies, monitor crop health, and prevent issues before they escalate. From weed detection to disease prevention, our platform keeps crops thriving.</p>
        </div>
    </div>

    <div className="contentBlock">
        <img src={pivot2} alt="pivot2" className='pivot2' />
        <div className="textBlock">
            <h2>04</h2>
            <h3>Sustainability Boost</h3>
            <p>By reducing water consumption and minimizing runoff, pivot irrigation contributes to sustainable farming practices. AgriSync empowers farmers to be stewards of the land while maximizing productivity.</p>
        </div>
    </div>
</div>



        </Fragment>
    );
}
