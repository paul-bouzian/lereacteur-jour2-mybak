import "./User.css";

const User = ({ userName }) => {
  return (
    <div className="user">
      <span>{userName}</span>
      <div>
        <i className="fa-regular fa-user"></i>
      </div>
    </div>
  );
};

export default User;
