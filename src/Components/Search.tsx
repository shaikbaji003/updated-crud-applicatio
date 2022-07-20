import * as React from 'react';
import './PostData.css';




const Searchbar: React.FunctionComponent<{setSearchValue:any}> = ({setSearchValue}) => {
    const [value,setValue]=React.useState('')
    const searchFunction=(value:any)=>{
  
        setSearchValue(value)
    }
    return (
        <div className='form-wrapper'>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='search' id='search'/>
            <button onClick={()=>searchFunction(value)} id='submit'>search</button>
        </div>
    )
}
export default Searchbar