import react from 'react'

const User = (props) => {
    props.HandleName(`My name is ${props.FullName} `);
    return (
      <>
        <div className='im' style={{fontFamily:"cursive",justifyContent:"center",alignItems:'center',top:'100px',background:'black',boxshadow:'-30px 30px 20px rgba(0,0,0.3)',width:'300',height:'200',margin:'20px 400px',borderstyle:'outset',border:'2px solid red',borderradius:'25px'}}>
        <img src={props.src} alt=""/>{props.children}
         <h2 >{props.FullName}</h2> 
        

  
          <h3>Profession : {props.Profession }</h3>
          <p>Bio : {props.Bio }</p>
          
        </div>
      </>
    );
  };
  
export default User;