import React from "react";
import useFlashMessageStore from "../FlashMessages/useFlashMessageStore";

const UserProfile = () => {
  const { setFlashMessage } = useFlashMessageStore((store) => ({
    setFlashMessage: store.setFlashMessage,
  }));

  return (
    <div>
      <button onClick={() => setFlashMessage("virker nu")}>Click me</button>
    </div>
  );
};

export default UserProfile;
