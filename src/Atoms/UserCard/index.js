import "./index.css"




const UserCard = ({image, fullName}) => {
    return(
        <div className="UserCard">
            <img src={image} alt={`${fullName} profile`} className="image"/>
            <h3 className="UserName">{fullName}</h3>
        </div>
    )
}

export default UserCard;