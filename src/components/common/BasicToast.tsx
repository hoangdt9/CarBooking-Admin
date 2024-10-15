import Snackbar from "@mui/material/Snackbar";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Alert } from "@mui/material";
import { setToast } from "../../redux/slices/common";

const BasicToast = () => {
  const dispatch = useAppDispatch();
  const { toast } = useAppSelector((state) => state.common);
  const { show, message, type = "error", duration = 3000 } = toast;
  // eslint-disable-next-line
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    dispatch(setToast({ show: false, message: "", type: "success" }));
  };

  if (!show) return null;
  return (
    <Snackbar
      open={show}
      autoHideDuration={duration}
      onClose={handleClose}
      message={message}
      // action={action}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default BasicToast;
