import React from 'react';
import '../Components/form.css';

export default function Form(props) {
    return (
        <div className='container'>
            <div className="card">
                <form onSubmit={props.sub} >
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="">Name :</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="name" onChange={props.click} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="">Age :</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="age" onChange={props.click} />
                        </div>
                    </div>
                    <button type="submit" id='btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

