import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading size="lg">Update your account</Heading>

      <Row>
        <Heading size="md">Update user data</Heading>
        <p>Update user data form</p>
      </Row>

      <Row>
        <Heading size="sm">Update password</Heading>
        <p>Update user password form</p>
      </Row>
    </>
  );
}

export default Account;
