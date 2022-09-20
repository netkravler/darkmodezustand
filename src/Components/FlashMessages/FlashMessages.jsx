import React, { useEffect } from "react";
import { Flashmessage } from "./FloatingAlerts.Styled";
import useFlashMessageStore from "./useFlashMessageStore";

const FlashMessages = () => {
  const flashDuration = 7000;

  const { flashMessages, removeFlashMessage } = useFlashMessageStore((store) => ({
    flashMessages: store.flashMessages,
    removeFlashMessage: store.removeFlashMessage,
  }));

  useEffect(() => {
    let flashTimer = setTimeout(() => removeFlashMessage(), flashDuration);

    return () => {
      clearTimeout(flashTimer);
    };
  }, [flashMessages, removeFlashMessage]);

  return (
    flashMessages && (
      <>
        <Flashmessage className="floating-alerts">
          <div className="alert alert-success text-center floating-alert shadow-sm">
            {flashMessages}
            </div>
        </Flashmessage>
      </>
    )
  );
};

export default FlashMessages;
