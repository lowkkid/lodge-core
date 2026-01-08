import Heading from "../ui/Heading";
import Row from "../ui/Row.jsx";
import UserTable from "../features/admin/UserTable.jsx";
import AddEmployee from "../features/admin/AddEmployee.jsx";

function Users() {
  return (
    <>
      <Row type="horizontal">
        <Heading size="lg">All users</Heading>
      </Row>

      <Row>
        <UserTable />
        <AddEmployee />
      </Row>
    </>
  );
}

export default Users;
