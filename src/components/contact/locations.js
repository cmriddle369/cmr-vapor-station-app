import React from 'react';

export default function Locations() {
    return (
        <div className='location-wrapper'>
            <div className="Canal location">
                <h4>Canal Winchester</h4>
                <p>
                    6286 Gender Rd 
                    <br></br>
                    Canal Winchester, OH 43110
                    <br></br>
                    <a href="tel: (614) 829-6710">(614) 829-6710</a>
                </p>
            </div>

            <div className="Pataskala location">
                <h4>Pataskala</h4>
                <p>
                    588 E Broad St
                    <br></br>
                    Pataskala, OH 43062
                    <br></br>
                    <a href="tel: (740) 919-0562">(740) 919-0562</a>
                </p>
            </div>

            <div className="Logan location">
                <h4>Logan</h4>
                <p>
                    12906 OH-664 
                    <br></br>
                    Suite B-2
                    <br></br>
                    Logan, OH 43138
                    <br></br>
                    <a href="tel: (740) 216-4637">(740) 216-4637</a>
                </p>
            </div>
        </div>
    )
}