import { StyledSnackbar } from "./StyledErrorHandler";
import { useSelector, useDispatch } from "react-redux";
import { errorSelector, setIsOpen } from "../../store/errorHandler/errorSlice";

export default function ErrorHandler() {
  const dispatch = useDispatch();
  const { isOpen, errorMsg } = useSelector(errorSelector);

  const onDismissSnackBar = () => dispatch(setIsOpen(false));

  return (
    <StyledSnackbar
      visible={isOpen}
      onDismiss={onDismissSnackBar}
      action={{
        label: "",
        icon: "close",
        color: "white",
      }}
    >
      {errorMsg}
    </StyledSnackbar>
  );
}
