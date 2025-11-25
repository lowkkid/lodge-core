import useCabins from "./useCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";

import styles from "./CabinTable.module.css";

function CabinTable() {
  const { isLoading, cabins } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <div className={styles["table"]} role="table">
      <header className={styles["table-header"]} role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </header>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinTable;
