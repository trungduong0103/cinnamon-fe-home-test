import {
  TOAST_TYPES,
  BOTTOM_BASE,
  SPACE_BETWEEN_TOASTS
} from "../hooks/constants";

import CheckIcon from "../assets/Check";
import ErrorIcon from "../assets/Error";
import WarningIcon from "../assets/Warning";
import InfoIcon from "../assets/Info";

export const toastCss = (type, index) => {
  switch (type) {
    case TOAST_TYPES.SUCCESS:
      return {
        backgroundColor: "#76AC60",
        marginBottom: `${BOTTOM_BASE + index * SPACE_BETWEEN_TOASTS}px`
      };
    case TOAST_TYPES.ERROR:
      return {
        backgroundColor: "#F44336",
        marginBottom: `${BOTTOM_BASE + index * SPACE_BETWEEN_TOASTS}px`
      };
    case TOAST_TYPES.WARNING:
      return {
        backgroundColor: "#FFEF62",
        marginBottom: `${BOTTOM_BASE + index * SPACE_BETWEEN_TOASTS}px`,
        color: "black"
      };
    case TOAST_TYPES.INFO:
      return {
        backgroundColor: "#6076AC",
        marginBottom: `${BOTTOM_BASE + index * SPACE_BETWEEN_TOASTS}px`
      };
    default:
      return {
        backgroundColor: "#FFF",
        marginBottom: `${BOTTOM_BASE + index * SPACE_BETWEEN_TOASTS}px`
      };
  }
};

export const toastIcon = (type) => {
  switch (type) {
    case TOAST_TYPES.SUCCESS:
      return CheckIcon;
    case TOAST_TYPES.ERROR:
      return ErrorIcon;
    case TOAST_TYPES.WARNING:
      return WarningIcon;
    case TOAST_TYPES.INFO:
      return InfoIcon;
    default:
      return null;
  }
};
