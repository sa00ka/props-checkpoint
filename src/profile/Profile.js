import React from 'react';
import {Button, Card} from 'react-bootstrap';
import propTypes  from "prop-types";

//we use destruction es6 it make very easy
// props1=InforProf , props2= HandleName et props3.child= children ={Img}
function Profile({InforProf,HandleName,children}) {
  return (
    // we use map methode with the array of object, we obtain many card if there is many object profile
    InforProf.map((el)=> <div className='elcarta' style={{margin:"70px 20px", textAlign:"center"}}>
    <Card style={{ width: '18rem', borderRadius:"100px 0px",borderStyle:"none",boxShadow:"0 3px 10px rgb(0 0 0 / 0.2", backgroundColor:"lightcyan", padding:"0px"}}>
      <Card.Img variant="top" src={children} data-aos="fade-up" data-aos-duration="1500" style={{width:"200px", height:"200px",borderRadius:"50%",margin:"20px auto 15px auto", boxShadow:"0 8px 8px -4px gray"}}/>
      <Card.Body style={{padding:"16px 0px"}}>
        <Card.Title style={{fontFamily:"monospace", fontSize:"30px", fontWeight:"bolder", color:"brown"}}>{el.FullName}</Card.Title>
        <Card.Text style={{fontFamily:"monospace", fontSize:"20px", fontWeight:"bold", color:"black"}}>{el.Proffession}</Card.Text>
        <Card.Text style={{backgroundColor:"white", width:"100%", margin:"30px 0", padding:"10px 0px", fontFamily:"sans-serif", fontWeight:"bold"}}>
{el.Bio}
        </Card.Text>
        <Button variant="primary" onClick={()=>HandleName(el.FullName)} style={{margin:"15px auto 15px auto"}}>Show Name</Button>
      </Card.Body>
    </Card>
    </div>)
  )
}
//check types of data profile
Profile.prototype= {
InforProf: propTypes.object,
HandleName: propTypes.func,
children: propTypes.string,
}
//make default values for profile
Profile.defaultProps= {
    InforProf: [
        {
            FullName:'Karouf',
            Bio:'Full-stack developers are experts in both the frontend and backend; so, the full-stack of technology that makes up a website.',
            Proffession: 'Developper',
        }
    ],
}
export default Profile
