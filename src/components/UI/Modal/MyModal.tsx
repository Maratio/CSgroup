import React, { useContext } from "react";
import { FormFieldsContext } from "../../../context/FormFieldsProvider";
import { CloseButton, MyModalContent } from "../../../styles/styles";
import classes from "./MyModal.module.css";
import { handleClear } from "../../../utils/handlers";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children?: React.ReactNode;
}

const MyModal = ({ children, visible, setVisible }: Props) => {
  const statesForm = useContext(FormFieldsContext);

  if (!statesForm) {
    throw new Error("FormFieldsContext is not provided");
  }

  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setVisible(false);
        handleClear(statesForm);
      }}
    >
      <MyModalContent>
        <div
          className={classes.myModalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton
            onClick={() => {
              setVisible(false);
              handleClear(statesForm);
            }}
          >
            X
          </CloseButton>
          {children}
        </div>
      </MyModalContent>
    </div>
  );
};

export default MyModal;
