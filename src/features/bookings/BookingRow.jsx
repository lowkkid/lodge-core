import styles from "./BookingRow.module.css";

import { format, isToday } from "date-fns";

import Menus from "../../ui/Menus.jsx";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout.js";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import useDeleteBooking from "./useDeleteBooking.js";

function BookingRow({
  booking: {
    id,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    cabinName,
    guestFullName,
    guestEmail,
  },
}) {
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <div className={styles["cabin"]}>{cabinName}</div>

      <div className={styles["stacked"]}>
        <span>{guestFullName}</span>
        <span>{guestEmail}</span>
      </div>

      <div className={styles["stacked"]}>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <div className={styles["amount"]}>{formatCurrency(totalPrice)}</div>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle opens={id} />
          <Menus.List id={id}>
            <Menus.MenuButton
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${id}`)}
            >
              See Details
            </Menus.MenuButton>
            {status === "unconfirmed" && (
              <Menus.MenuButton
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${id}`)}
              >
                Check In
              </Menus.MenuButton>
            )}
            {status === "checked-in" && (
              <Menus.MenuButton
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(id)}
                disabled={isCheckingOut}
              >
                Check Out
              </Menus.MenuButton>
            )}
            <Modal.Open opens="delete">
              <Menus.MenuButton icon={<HiTrash />}>Delete</Menus.MenuButton>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="delete">
            <ConfirmDelete
              disabled={isDeleting}
              resourceName="booking"
              onConfirm={() => deleteBooking(id)}
            ></ConfirmDelete>
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
