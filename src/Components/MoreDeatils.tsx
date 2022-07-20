import * as React from "react";
import "./MoreDetails.css"

const MoreDetails: React.FunctionComponent<{data:any;setMoreDetails:any;arr:any}> = ({data,setMoreDetails,arr}) => {
    console.log(data)
    return(
        <div className="moreDetails_container">
            <h4 onClick={()=>{setMoreDetails(false)}}>X</h4>
           <div className="image">
                <img src={data.avatar_url} alt=''/>
           </div>
           <div className="details">
                <h1>{data.login} </h1>
                <a href={data.html_url}>git</a>
                <h2>articles</h2>{arr[0]}
                <h2>following</h2>{arr[1]}
                <h2>followers</h2>{arr[2]}
           </div>
            
        </div>
    )
}
export default MoreDetails