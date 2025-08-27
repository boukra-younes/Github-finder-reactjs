import { useContext } from "react";
import AlertContext from "../contexts/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert && (
      <div className={`alert alert-${alert.type} mb-5 alert-soft`}>
        {alert.msg}
      </div>
    )
  );
}

export default Alert;
