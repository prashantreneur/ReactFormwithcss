import React from 'react';
import '../Components/form.css';

export default function Form(props) {
    return (
        <div className='container'>
            <div className="fmcard">
                <form onSubmit={props.sub} onReset={props.rest} >
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="">Name :</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="name" onChange={props.click} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="">Age :</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="age" onChange={props.click} required />
                        </div>
                    </div>
                    <button type="submit" id='btn'>Submit</button>
                    <button type="reset" id='btn-r'>Reset</button>
                </form>
            </div>

        </div>
    )
}

