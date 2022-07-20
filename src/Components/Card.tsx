import * as React from "react";
import { useEffect } from "react";
import EditForm from "./EditForm";
import { Avatar, Button } from "@mui/material";
import MoreDetails from "./MoreDeatils";

const Card: React.FunctionComponent<{
  curElem: any;
  users: any;
  setusers: any;
  handleDelete:any;
}> = ({ curElem, users, setusers,handleDelete }) => {
  const [edit, setEdit] = React.useState(false);
  const [moreDeatils,setMoreDetails]=React.useState(false)
  const [Articles, setArticles] = React.useState(0);
  const [Following, setFollowin] = React.useState(0);
  const [Followers, setFollowers] = React.useState(0);

                                    
    useEffect(() => {
    fetch(curElem.url)
      .then((data) => data.json())
      .then((data) => {
        // setFollowers(data.length))
        setFollowers(data.followers)
        setFollowin(data.following)
        setArticles(data.public_repos)
      });
  }, []);
  let arr = [Articles, Following, Followers];

  return (
    <div  className="card_item" key={curElem.id}>
      {edit === false && (
        <div className="card_inner">
          {/* <img src={curElem.avatar_url} alt="" /> */}
          <Avatar alt="avatar" src={curElem.avatar_url}  />

          <div className="userName">{curElem.login}</div>
          <div className="userUrl">{curElem.html_url}</div>
          <div className="detail-box">
            <div className="gitDetail">
              <span>Articles</span>
              {Articles}
            </div>
            <div className="gitDetail">
              <span>Following</span>
              {Followers}
            </div>
            <div className="gitDetail">
              <span>Followers</span>
              {Following}
            </div>
          </div>
          <button
            className="seeMore"
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </button>
          {/* <button onClick={()=>{handleDelete(curElem.id)}}>delete</button>
          <button onClick={()=>{setMoreDetails(true)}}>more  deatials</button> */}
          <Button variant="outlined" color="primary" onClick={()=>{setMoreDetails(true)}}>
  More details
</Button>
<Button variant="outlined" color="primary" onClick={()=>{handleDelete(curElem.id)}}>
  Delete
</Button>


        </div>
      )}
      {edit && (
        <EditForm
          setedit={setEdit}
          arr={arr}
          setarticle={setArticles}
          setfollowing={setFollowin}
          setfollowers={setFollowers}
          curElem={curElem}
          users={users}
          setusers={setusers}
        />
      )}

      {  
               
         moreDeatils && <MoreDetails arr={arr} setMoreDetails={setMoreDetails} data={curElem}/>

      }
      
    </div>
  );
};

export default Card;
