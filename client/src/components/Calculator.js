import React, { useState } from 'react';
import './Calculator.css';
import char1 from '../images/char1.jpg';
import vtube1 from '../images/vtube1.jpg';
import pet1 from '../images/pet1.jpg';
import bg1 from '../images/bg1.jpg';
import Dropdown from 'react-bootstrap/Dropdown'


let InitialValues = {
    type: 0,
    variant: 1,
    pet: 0,
    bg: 0,
    vtube: 0
};


function Calculator(props) {
    const [total, setTotal] = useState(0);
    const [values, setValues] = useState(InitialValues);

    function handleTypeClick(event) {
        let newValues = { ...values, type: Number(event.target.value) };
        calculate(newValues);
        setValues(values => newValues);
    }

    function handleVariantClick(event) {
        let newValues = { ...values, variant: Number(event.target.value) };
        calculate(newValues);
        setValues(values => newValues);
    }

    function handleExtraClick(event) {
        let { name, value, checked} = event.target;
        let newValues = { ...values, [name]: Number(checked ? value : 0) };
        calculate(newValues);
        setValues(values => newValues);
    }

    function handleVtubeChange(event) {
        let newValues = { ...values, vtube: Number(event.target.value) };
        calculate(newValues);
        setValues(values => newValues);
    }

    function calculate(newValues) {
        let total = (newValues.type * newValues.variant) + newValues.pet + newValues.bg; {
            if ( newValues.type === 150.00 ) {
                 total += newValues.vtube; 
            // compute the total WITHOUT the vtube menu
            // if type is 150 (the price of vtube)
            //     add the vtube menu value to total
            // call setTotal() to update state
            //         }   
        }
        }
        setTotal(total);   
}

    return (
        <div className="Calculator">
            <main className="calc-wrapper">
                <div className="container">
                    <form id="form">


                        <div className="calc-section">
                            <h4 className="checkbox-wrapper title-bold section-title">Choose your model:</h4>
                            <label className="radio-wrapper" data-name="mobile">
                                <input type="radio" onClick={handleTypeClick} className="radio" name="type" id="radioTypeInput" value="50" />
                                <img src={char1} alt="char1" height="150" width="150" />
                                <div className="title-lite">2d model
                                    <span className="note">price: 50 €</span>
                                </div>
                                
                            </label>
                            <label className="radio-wrapper" data-name="mobile">
                                <input type="radio" onClick={handleTypeClick} className="radio" name="type" value="150" />
                                <img src={vtube1} alt="vtube1" height="150" width="150" />
                                <div className="title-lite">
                                    V-Tube model
                                    <div className="menu-item">
                                    <span className="note" name="vtube">price: 150 €</span>
                                    <select value={values.vtube} onChange={handleVtubeChange}>
                                    <option value="">Choose One</option>
                                    <option value="100.12">Art Only HS (100.12€)</option>
                                    <option value="116.82">Art Only Bust (116.82€)</option>
                                    <option value="137.67">Art Only HB (137.67€)</option>
                                    <option value="166.88">Art Only FB (166.88€)</option>
                                    <option value="200.25">Art and Rig HS (200.25€)</option>
                                    <option value="233.63">Art and Rig Bust (233.63€)</option>
                                    <option value="275.35">Art and Rig HB (275.35€)</option>
                                    <option value="333.76">Art and Rig FB (333.76€)</option>
                                    <option value="100.12">Rigging Only HS (100.12€)</option>
                                    <option value="116.82">Rigging Only Bust (116.82€)</option>
                                    <option value="137.67">Rigging Only HB (137.67€)</option>
                                    <option value="166.88">Rigging Only FB  (166.88€)</option>
                                    <option value="15.64">Expression Rig Only (15.64€)</option>
                                    <option value="15.64">Expression Art Only (15.64€)</option>
                                    <option value="31.28">Expression Rig And Art (31.28€)</option>
                                    <option value="57.37">Reserved CH. Sheet (57.37€)</option>
                                    </select>
                                    </div>
                                </div>
                            </label >
                            
                        </div> 
                        
                        
                        <div className="calc-section">
                            <label className="checkbox-wrapper title-bold section-title"> Choose your style </label>
                            <div className="variants-wrapper">
                                <label className="variants-label">
                                    <input className="variants-radio-real" onClick={handleVariantClick} type="radio" name="variants" value="0.8" />
                                    <span className="variants-radio-fake">pixel art</span>
                                </label>

                                <label className="variants-label">
                                    <input className="variants-radio-real" onClick={handleVariantClick} type="radio" name="variants" value="1" defaultChecked="1" />
                                    <span className="variants-radio-fake">chibi</span>
                                </label>

                                <label className="variants-label">
                                    <input className="variants-radio-real" onClick={handleVariantClick} type="radio" name="variants" value="1.2" />
                                    <span className="variants-radio-fake">anime</span>
                                </label>

                                <label className="variants-label">
                                    <input className="variants-radio-real" onClick={handleVariantClick} type="radio" name="variants" value="1.5" />
                                    <span className="variants-radio-fake">realistic</span>
                                </label>

                                
                            </div>
                        </div>
                        

                        <div className="calc-section">
                            <label className="checkbox-wrapper title-bold section-title"> Extras: </label>
                            <label className="radio-wrapper">
                                <input type="checkbox" onClick={handleExtraClick} className="radio" name="pet" value="40" />
                                <img src={pet1} alt="pet1" height="150" width="150" />
                                <div className="title-lite">
                                    Pet
                                    <span className="note">price: 40 €</span>
                                </div>
                            </label>
                            <label className="radio-wrapper">
                                <input type="checkbox" onClick={handleExtraClick} className="radio" name="bg" value="50" />
                                <img src={bg1} alt="bg" height="150" width="150" />
                                <div className="title-lite">
                                    Background
                                    <span className="note">price: 50 €</span>
                                </div>
                            </label>
                            
                        </div>
                        

                    
                        <div className="calc-price">
                            <div className="calc-price-title">Total price:</div>
                            <div className="calc-price-value">
                                <span id="total-price">{total}</span>
                                {' '}
                                euros
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Calculator;