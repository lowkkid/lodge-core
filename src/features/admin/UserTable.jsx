import useUsers from "./useUsers.js";
import Spinner from "../../ui/Spinner.jsx";
import Empty from "../../ui/Empty.jsx";
import Menus from "../../ui/Menus.jsx";
import Table from "../../ui/Table.jsx";
import Pagination from "../../ui/Pagination.jsx";
import UserRow from "./UserRow.jsx";

function UserTable() {
  const { isLoading, users, pageSize, count } = useUsers();

  if (isLoading) return <Spinner />;
  if (!users.length) return <Empty resource="users" />;

  return (
    <Menus>
      <Table columns="2.4fr 1fr 1fr 1.4fr 3.2rem">
        <Table.Header>
          <div>ID</div>
          <div>Username</div>
          <div>Role</div>
          <div>Created At</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={users}
          render={(user) => <UserRow key={user.id} user={user} />}
        />
        <Table.Footer>
          <Pagination pageSize={pageSize} count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UserTable;
