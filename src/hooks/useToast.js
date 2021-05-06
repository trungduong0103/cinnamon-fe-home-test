import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { MAX_TOASTS } from "./constants";
import { toastCss, toastIcon } from "../helpers";

const portal = document.getElementById("toast-portal");

const ToastNotify = ({ message, style, Icon }) => {
  return (
    <div className="a-single-toast" style={style}>
      <Icon className="icon" />
      {message}
    </div>
  );
};

const useToast = () => {
  // toasts to display maximum 4 toasts on window
  const [toasts, setToasts] = useState([]);
  // queuedToasts to handle the rest of the toasts
  const [queuedToasts, setQueuedToasts] = useState([]);

  const showToast = (message, type) => {
    const toast = {
      message,
      type
    };
    setQueuedToasts([...queuedToasts, toast]);
  };

  useEffect(() => {
    // only allow maximum 4 toasts on window
    // the rest is queued
    if (toasts.length < MAX_TOASTS && queuedToasts.length > 0) {
      const first = queuedToasts[0];
      setToasts([...toasts, first]);
      const removed = queuedToasts.splice(1, queuedToasts.length - 1);
      setQueuedToasts([...removed]);
    }
  }, [toasts, queuedToasts]);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (toasts.length > 0) {
        // first in
        let first = toasts[0];
        // first out
        let filtered = toasts.filter((toast) => {
          return toast !== first;
        });
        // remove oldest toast from state
        setToasts([...filtered]);
      }
      // for every 2s
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [toasts]);

  const Toasts = () => {
    return createPortal(
      toasts.map((toast, index) => {
        const { message, type } = toast;
        return (
          <ToastNotify
            key={index}
            message={message}
            style={toastCss(type, index)}
            Icon={toastIcon(type)}
          />
        );
      }),
      portal
    );
  };

  return {
    Toasts,
    showToast
  };
};

export default useToast;
