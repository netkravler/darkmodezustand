import React from "react";
import useFlashMessageStore from "../FlashMessages/useFlashMessageStore";
import { useModalStore } from "../Modal/useModalStore";
import { Rows } from "../App/AppTemplates/Rows";

export const Home = () => {
  const { setModalPayload } = useModalStore();

  const { setFlashMessage } = useFlashMessageStore();

  return (
    <div>
      Home
      <button onClick={() => setFlashMessage("jeg er en flasher")}>flash me</button>
      <button onClick={() => setModalPayload("I am the greatest modal")}>Show me modal</button>
    </div>
  );
};
