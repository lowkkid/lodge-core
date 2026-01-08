import { useForm } from "react-hook-form";
import Button from "../../ui/Button.jsx";
import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import useUpdatePassword from "./useUpdatePassword.js";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updatePassword, isUpdating } = useUpdatePassword();

  function onSubmit({ oldPassword, newPassword }) {
    updatePassword(
      { oldPassword, newPassword },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Current password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="current-password"
          id="oldPassword"
          disabled={isUpdating}
          {...register("oldPassword", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="New password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="newPassword"
          autoComplete="new-password"
          disabled={isUpdating}
          {...register("newPassword", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          onClick={reset}
          type="reset"
          variation="secondary"
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
