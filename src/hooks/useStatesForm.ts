import { useState } from "react";

const useStatesForm = (_title: string, _description: string, _priority: string) => {
  const [title, setTitle] = useState(_title);
  const [description, setDescription] = useState(_description);
  const [priority, setPriority] = useState(_priority);

  return {
    title,
    description,
    priority,
    setTitle,
    setDescription,
    setPriority,
  };
};

export default useStatesForm;
