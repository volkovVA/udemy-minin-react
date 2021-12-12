import React, { useContext } from "react";
import { useAlert } from "./AlertContext";

export default function Alert() {

  const alert = useAlert();

  if (!alert) return null

  return (
    <div className={'alert alert-danger mt-3'}>
      Это очень важное сообщение
    </div>
  )
}