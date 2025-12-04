import { formatCurrency } from "../../utils/helpers";
import useDeleteCabin from "./useDeleteCabin";
import CreateCabinForm from "./CreateCabinForm";

import styles from "./CabinRow.module.css";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const handleDuplicate = () => {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  };

  return (
    <Table.Row>
      <img className={styles["img"]} src={image} alt=""></img>
      <div className={styles["cabin"]}>{name}</div>
      <div>Fits up to {maxCapacity} guests</div>
      <div className={styles["price"]}>{formatCurrency(regularPrice)}</div>
      {discount ? (
        <div className={styles["discount"]}>{formatCurrency(discount)}</div>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle opens={cabinId} />
            <Menus.List id={cabinId}>
              <Menus.MenuButton
                icon={<HiSquare2Stack />}
                disabled={isCreating}
                onClick={() => handleDuplicate()}
              >
                Duplicate
              </Menus.MenuButton>
              <Modal.Open opens="edit">
                <Menus.MenuButton icon={<HiPencil />}>Edit</Menus.MenuButton>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.MenuButton icon={<HiTrash />}>Delete</Menus.MenuButton>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                disabled={isDeleting}
                resourceName="cabin"
                onConfirm={() => deleteCabin(cabinId)}
              ></ConfirmDelete>
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;
