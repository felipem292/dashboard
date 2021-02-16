import { alertConstants } from "../_constants";
import { toast } from "react-toastify";

export const alertActions = {
  success,
  error,
  clear,
  info,
};

function info(message) {
  toast.info(message);
  return { type: alertConstants.INFO, message };
}

function success(message) {
  toast.success(message);
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  toast.error(message);
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}
