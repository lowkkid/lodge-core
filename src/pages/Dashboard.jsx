import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardFilter from "../features/dashboard/DashboardFilter.jsx";
import DashboardLayout from "../features/dashboard/DashboardLayout.jsx";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading size="lg">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
