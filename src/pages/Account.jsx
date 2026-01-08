import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateAccountForm from "../features/account/UpdateAccountForm.jsx";
import UpdatePasswordForm from "../features/account/UpdatePasswordForm.jsx";

function Account() {
  return (
    <>
      <Heading size="lg">Update your account</Heading>

      <Row>
        <Heading size="md">Update user data</Heading>
        <UpdateAccountForm />
      </Row>

      <Row>
        <Heading size="sm">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
