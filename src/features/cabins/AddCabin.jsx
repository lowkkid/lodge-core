import { useState } from "react";
import Button from "../../ui/Button.jsx";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";

// function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false);
//
//     const handleCloseModal = () => setIsOpenModal(false);
//
//     return <div>
//         <Button onClick={() => setIsOpenModal((prev) => !prev)}>
//             Add new cabin
//         </Button>
//         {isOpenModal && <Modal onCloseModal={handleCloseModal}><CreateCabinForm onClose={handleCloseModal}/></Modal>}
//     </div>
//
// }

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
