import styles from "./DashboardLayout.module.css";
import useRecentSales from "./useRecentSales.js";
import Spinner from "../../ui/Spinner.jsx";
import useRecentStays from "./useRecentStays.js";
import Stats from "./Stats.jsx";
import useCabins from "../cabins/useCabins.js";
import SalesChart from "./SalesChart.jsx";
import useRecentBookingsCount from "./useRecentBookingsCount.js";
import DurationChart from "./DurationChart.jsx";
import TodayActivity from "../check-in-out/TodayActivity.jsx";

// const StyledDashboardLayout = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-template-rows: auto 34rem auto;
//   gap: 2.4rem;
// `;

function DashboardLayout() {
  const { sales, isLoading: isLoadingSales } = useRecentSales();
  const {
    stays,
    confirmedStays,
    isLoading: isLoadingStays,
    numDays,
  } = useRecentStays();
  const { bookingsCount, isLoading: isLoadingCount } = useRecentBookingsCount();
  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoadingSales || isLoadingStays || isLoadingCabins) return <Spinner />;

  return (
    <div className={styles["layout"]}>
      <Stats
        bookingsCount={bookingsCount}
        sales={sales}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart sales={sales} />
    </div>
  );
}

export default DashboardLayout;
