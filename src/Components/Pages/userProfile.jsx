import React from "react";
import useFlashMessageStore from "../FlashMessages/useFlashMessageStore";

const UserProfile = () => {
  const { setFlashMessage } = useFlashMessageStore();

  return (
    <div>
      <button onClick={() => setFlashMessage("virker nu")}>Click me</button>
    </div>
  );
};

export default UserProfile;
