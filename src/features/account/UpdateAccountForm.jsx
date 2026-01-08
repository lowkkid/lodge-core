import { useState } from "react";

import Button from "../../ui/Button.jsx";
import FileInput from "../../ui/FileInput.jsx";
import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import { useAuth } from "../authentication/AuthContext.jsx";
import useUpdateAccount from "./useUpdateAccount.js";

function UpdateAccountForm() {
  const {
    user: { username: originalUsername },
  } = useAuth();

  const { updateAccount, isUpdating } = useUpdateAccount();

  const [username, setUsername] = useState(originalUsername);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (username)
      updateAccount(
        { username, avatar },
        {
          onSuccess: () => {
            setAvatar(null);
            e.target.reset();
          },
        },
      );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Username">
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={() => {
            setAvatar(null);
            setUsername(originalUsername);
          }}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateAccountForm;
