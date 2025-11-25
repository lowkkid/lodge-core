import { useState } from "react";

import { formatCurrency } from "../../utils/helpers";
import useDeleteCabin from "./useDeleteCabin";
import CreateCabinForm from "./CreateCabinForm";

import styles from "./CabinRow.module.css";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";

function CabinRow({ cabin }) {
  const [showEditForm, setShowEditForm] = useState();

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
    <>
      <div className={styles["table-row"]} role="row">
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
          <button disabled={isCreating} onClick={() => handleDuplicate()}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowEditForm((prev) => !prev)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </div>
      {showEditForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
