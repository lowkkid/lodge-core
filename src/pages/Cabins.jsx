import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin.jsx";
import CabinTableOperations from "../features/cabins/CabinTableOperations.jsx";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading size="lg">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />

        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
