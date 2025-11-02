import "./IdCard.css"

function IdCard(props) {
    return( 
    <div className = "IdCard">
        < img src = {props.picture}/>  
        <div id="content">
            <b>First name</b>: {props.firstName} <br/>
             <b>Last name</b>: {props.lastName} <br/>
             <b>Gender</b>: {props.gender} <br/>
             <b>Height</b>: {props.height/100}m <br/>
             <b>Birth</b>: {props.birth.toDateString()} <br/>

            </div>   

    </div>
    

    )
}

export default IdCard