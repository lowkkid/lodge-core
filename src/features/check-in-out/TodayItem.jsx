import styles from "./TodayItem.module.css";
import Tag from "../../ui/Tag.jsx";
import { Flag } from "../../ui/Flag.jsx";
import Button from "../../ui/Button.jsx";
import { useAuth } from "../authentication/AuthContext.jsx";
import CheckoutButton from "./CheckoutButton.jsx";

// const StyledTodayItem = styled.li`
//   display: grid;
//   grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
//   gap: 1.2rem;
//   align-items: center;
//
//   font-size: 1.4rem;
//   padding: 0.8rem 0;
//   border-bottom: 1px solid var(--color-grey-100);
//
//   &:first-child {
//     border-top: 1px solid var(--color-grey-100);
//   }
// `;
//
// const Guest = styled.div`
//   font-weight: 500;
// `;

function TodayItem({ activity }) {
  const { user } = useAuth();
  const { bookingId, status, numNights, guestFullName, guestCountry } =
    activity;

  const style = {
    gridTemplateColumns: `${user.role === "ADMIN" ? "9rem 2rem 1fr 7rem" : "9rem 2rem 1fr 7rem 9rem"}`,
  };

  return (
    <li className={styles["today-item"]} style={style}>
      {status === "unconfirmed" ? (
        <Tag type="green">Arriving</Tag>
      ) : (
        <Tag type="blue">Departing</Tag>
      )}

      <Flag src={guestCountry} alt="Flag" />
      <div className={styles["guest"]}>{guestFullName}</div>
      <div>{numNights} nights</div>

      {user.role !== "ADMIN" &&
        (status === "unconfirmed" ? (
          <Button
            size="small"
            variation="primary"
            isLink={true}
            to={`/checkin/${bookingId}`}
          >
            Check in
          </Button>
        ) : (
          <CheckoutButton bookingId={bookingId} />
        ))}
    </li>
  );
}

export default TodayItem;
