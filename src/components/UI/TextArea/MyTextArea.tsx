interface Props {
  placeholder?: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
}

const MyTextArea = (props: Props) => {
  return <textarea {...props} />;
};

export default MyTextArea;
