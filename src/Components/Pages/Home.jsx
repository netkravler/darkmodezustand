import React from "react";
import useFlashMessageStore from "../FlashMessages/useFlashMessageStore";
import { useModalStore } from "../Modal/useModalStore";
import { Rows } from "../App/AppTemplates/Rows";

export const Home = () => {
  const { setModalPayload } = useModalStore((store) => ({
    setModalPayload: store.setModalPayload,
  }));

  const { setFlashMessage } = useFlashMessageStore((store) => ({
    setFlashMessage: store.setFlashMessage,
  }));

  const FlashMeAButton = () => {
    return (
      <Rows
        first="sd"
        second={<button onClick={() => setFlashMessage("jeg er endnu en flasher")}>flash me in modal</button>}
        third="dd"
        fourth="dd"
      />
    );
  };

  return (
    <div>
      Home
      <button onClick={() => setFlashMessage("jeg er en flasher")}>flash me</button>
      <button onClick={() => setModalPayload(<FlashMeAButton />)}>Show me modal</button>
    </div>
  );
};
