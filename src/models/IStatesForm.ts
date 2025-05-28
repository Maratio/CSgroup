export interface IStatesForm{
    title: string;
    description: string;
    priority: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    setPriority: React.Dispatch<string>;
}