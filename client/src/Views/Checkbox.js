import { useState } from "react";


const App = () => {
    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)
    
    return <input onClick={handleClick} checked={checked} 
    type="checkbox" 
    />
  };
  
  



  export default Checkbox;