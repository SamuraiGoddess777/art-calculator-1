//this is nice to have some day feature

import React, {useState} from "react";

const addForm = {
    type: "",
    image: "",
    description: "",
    price: ""
};

function adminAddView (props) {
    let [item, setItem] = useState(addForm);

    const handleChange = (event) => {
        setItem({...item, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(item);
        props.addItem(item);
        setItem(addForm);
    }
    return (
        <div className="addForm">
            <form onSubmit = {handleSubmit}>
                <label>Category</label>
                <select name="category" value={item.category} onChange={handleChange}>
                    <variant value="Characters">Characters</variant>
                    <variant value="Extras">Extras</variant>
                </select>
                <label>Image</label>
                
            </form>
        </div>

    )
}