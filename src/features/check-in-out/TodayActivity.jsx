import styles from "./TodayActivity.module.css";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import useTodayActivity from "../dashboard/useTodayActivity.js";
import Spinner from "../../ui/Spinner.jsx";
import TodayItem from "./TodayItem.jsx";

// const StyledToday = styled.div`
//   /* Box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);
//
//   padding: 3.2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 2.4rem;
//   grid-column: 1 / span 2;
//   padding-top: 2.4rem;
// `;
//
// const TodayList = styled.ul`
//   overflow: scroll;
//   overflow-x: hidden;
//
//   /* Removing scrollbars for webkit, firefox, and ms, respectively */
//   &::-webkit-scrollbar {
//     width: 0 !important;
//   }
//   scrollbar-width: none;
//   -ms-overflow-style: none;
// `;
//
// const NoActivity = styled.p`
//   text-align: center;
//   font-size: 1.8rem;
//   font-weight: 500;
//   margin-top: 0.8rem;
// `;

function TodayActivity() {
  const { todayActivity, isLoading } = useTodayActivity();
  return (
    <div className={styles["today"]}>
      <Row type="horizontal">
        <Heading size="md">Today</Heading>
      </Row>

      {!isLoading ? (
        todayActivity?.length > 0 ? (
          <ul className={styles["today-list"]}>
            {todayActivity.map((activity) => (
              <TodayItem key={activity.bookingId} activity={activity} />
            ))}
          </ul>
        ) : (
          <p className={styles["no-activity"]}>No activity today...</p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default TodayActivity;
