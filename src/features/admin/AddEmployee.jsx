import Modal from "../../ui/Modal.jsx";
import Button from "../../ui/Button.jsx";
import CreateEmployeeForm from "./CreateEmployeeForm.jsx";

function AddEmployee() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="employee-form">
          <Button>Add new employee</Button>
        </Modal.Open>
        <Modal.Window name="employee-form">
          <CreateEmployeeForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddEmployee;
