import Table from "../../ui/Table.jsx";
import Tag from "../../ui/Tag.jsx";
import Modal from "../../ui/Modal.jsx";
import Menus from "../../ui/Menus.jsx";
import { HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import { useAuth } from "../authentication/AuthContext.jsx";
import useDeleteUser from "./useDeleteUser.js";

function UserRow({ user: { id, username, role, createdAt } }) {
  const { user: currentUser } = useAuth();
  const roleToTagName = {
    ADMIN: "blue",
    EMPLOYEE: "green",
  };
  const { isDeleting, deleteEmployee } = useDeleteUser();

  const isCurrentUser = currentUser.username === username;

  return (
    <Table.Row
      style={isCurrentUser ? { backgroundColor: "var(--color-grey-100)" } : {}}
    >
      <div>{id}</div>
      <div>{isCurrentUser ? `${username} (You)` : `${username}`}</div>
      <Tag type={roleToTagName[role]}>{role}</Tag>
      <div>{createdAt.slice(0, 16).replace("T", " ")}</div>

      {!isCurrentUser && (
        <Modal>
          <Menus.Menu>
            <Menus.Toggle opens={id} />
            <Menus.List id={id}>
              <Modal.Open opens="delete">
                <Menus.MenuButton icon={<HiTrash />}>Delete</Menus.MenuButton>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="delete">
              <ConfirmDelete
                disabled={isDeleting}
                resourceName="employee"
                onConfirm={() => deleteEmployee(id)}
              ></ConfirmDelete>
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      )}
    </Table.Row>
  );
}

export default UserRow;
