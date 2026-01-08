import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import useCreateEmployee from "./useCreateEmployee.js";

function CreateEmployeeForm({ onClose }) {
  const { register, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;
  const { createEmployee, isCreating } = useCreateEmployee();

  function onSubmit(data) {
    createEmployee(
      { ...data },
      {
        onSuccess: () => {
          reset();
          onClose?.();
        },
      },
    );
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onClose ? "modal" : "regular"}
    >
      <FormRow label="Username" error={errors?.username?.message}>
        <Input
          type="text"
          id="username"
          {...register("username", { required: "This field is required" })}
          disabled={isCreating}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          type="text"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters",
            },
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={() => onClose?.()}>
          Cancel
        </Button>
        <Button disabled={isCreating}>Create new employee</Button>
      </FormRow>
    </Form>
  );
}

export default CreateEmployeeForm;
