import React from 'react';
import './card.css';

export default function Card({ name, age }) {
    return (


        <div>
            <div class="card">
                <div class="card_content">
                    <h2 class="card_title">NAME:{name}</h2>
                    <h2>AGE: {age}</h2>

                </div>
            </div>



        </div >




    )
}










// <ul className='cards'>
//                 <li className='cards_item'>
//                 <div className="card">
//                     <div className="card_content">
//                         <p className='card_text'>Name:{props.name}</p>
//                         <p className='card_text'>Age:{props.age}</p>
//                     </div>
//                 </div>

//                 </li>
//             </ul>