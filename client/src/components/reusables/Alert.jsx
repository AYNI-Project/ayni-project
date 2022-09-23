import { AlertBox } from "../../styles/alerts/index.js";

export default function Alert({ message }) {
  return (
    <AlertBox>
      <span>{message}</span>
    </AlertBox>
  );
}