import { useState } from "react";
import { createContext } from "react";
import { IStatesForm } from "../models/IStatesForm";

interface FormProviderProps {
  children: React.ReactNode;
}

const FormFieldsContext = createContext<IStatesForm | null>(null);
const FormFieldsProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <FormFieldsContext.Provider
      value={{
        title,
        description,
        priority,
        setTitle,
        setDescription,
        setPriority,
      }}
    >
      {children}
    </FormFieldsContext.Provider>
  );
};

export { FormFieldsContext, FormFieldsProvider };
