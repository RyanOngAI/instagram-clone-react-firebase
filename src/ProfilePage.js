import React from "react";
import firebase from "firebase";

function ProfilePage({ match }) {
  return (
    <div>
      <h2>My profile page</h2>
      <p>{match.params.id}</p>
    </div>
  );
}

export default ProfilePage;
