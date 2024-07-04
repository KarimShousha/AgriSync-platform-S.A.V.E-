import './css/ReadingIcon.css'

import GaugeComponent from 'react-gauge-component'

function ReadingIcon({reading, minValue, maxValue, sensorName}) {
  return (
    <div className='guage-container' style={{width: '25rem', height: '350px' , marginTop: '2rem',padding:'-5rem'}}>
<div className='guage' style={{width: '100%', marginLeft: '0rem', margin:'0', textAlign: 'center', padding:'0' }}>
    <GaugeComponent 
    className='animated-element-class'
        minValue={minValue}
        maxValue={maxValue}
        arc={{
            subArcs: [
                {
                    limit: 25,
                    color: '#5BE12C',
                    showTick: true,
                    style: {width: 80},
                    fontSize: 50,
                    hideText: true
                    
                },
                {
                    limit: 50,
                    color: '#F5CD19',
                    showTick: true,
                    style: {width: 80},
                    hideText: true
                },
                {
                    limit: 80,
                    color: '#F58B19',
                    showTick: true,
                    style: {width: 80},
                    hideText: true
                },
                {
                    limit: 100,
                    color: '#EA4228',
                    showTick: true,
                    style: {width: 80},
                    hideText: true
                },
            ]
        }}
        value={reading}
    />
    <div style={{ marginTop: '5px', fontSize: '20px' }}>{sensorName}</div>
</div>


  </div>
   );
}
export default ReadingIcon;
