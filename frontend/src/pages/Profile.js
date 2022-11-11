import { FaSignInAlt, FaSignOutAlt, FaUser, FaEdit } from "react-icons/fa";
function Profile({ username, email }) {
  return (
    <div>
      <h1>
        <FaEdit />
        Profile
      </h1>
      <p>username: {username}</p>
      <p>email: {email}</p>
    </div>
  );
}

export default Profile;
