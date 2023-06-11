import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button, Form, Input } from "../styled-components/search-form";

const SearchForm: FC<SearchFormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(input);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter Keyword"
        value={input}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
