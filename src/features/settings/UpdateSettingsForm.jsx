import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSettings from "./useSettings";
import Spinner from "../../ui/Spinner";
import useUpdateSetting from "./useUpdateSetting";
import Row from "../../ui/Row.jsx";
import { useEffect, useState } from "react";

function UpdateSettingsForm({ readOnly }) {
  const { isLoading, settings } = useSettings();

  const [formValues, setFormValues] = useState({
    minBookingLength: "",
    maxBookingLength: "",
    maxGuestsPerBooking: "",
    breakfastPrice: "",
  });

  const { isUpdating, updateSetting } = useUpdateSetting();

  useEffect(() => {
    if (settings) {
      setFormValues({
        minBookingLength: settings.minBookingLength,
        maxBookingLength: settings.maxBookingLength,
        maxGuestsPerBooking: settings.maxGuestsPerBooking,
        breakfastPrice: settings.breakfastPrice,
      });
    }
  }, [settings]);

  if (isLoading) return <Spinner />;

  function handleUpdate(e, fieldName) {
    if (
      settings.maxGuestsPerBooking !== formValues.maxGuestsPerBooking ||
      settings.minBookingLength !== formValues.minBookingLength ||
      settings.maxBookingLength !== formValues.maxBookingLength ||
      settings.breakfastPrice !== formValues.breakfastPrice
    ) {
      updateSetting(formValues);
    }
  }

  return (
    <>
      <Form>
        <FormRow label="Minimum nights/booking">
          <Input
            type="number"
            id="min-nights"
            value={formValues.minBookingLength}
            disabled={readOnly || isUpdating}
            onChange={(e) =>
              setFormValues({ ...formValues, minBookingLength: e.target.value })
            }
            onBlur={(e) => handleUpdate(e, "minBookingLength")}
          />
        </FormRow>
        <FormRow label="Maximum nights/booking">
          <Input
            type="number"
            id="max-nights"
            value={formValues.maxBookingLength}
            disabled={readOnly || isUpdating}
            onChange={(e) =>
              setFormValues({ ...formValues, maxBookingLength: e.target.value })
            }
            onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          />
        </FormRow>
        <FormRow label="Maximum guests/booking">
          <Input
            type="number"
            id="max-guests"
            value={formValues.maxGuestsPerBooking}
            disabled={readOnly || isUpdating}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                maxGuestsPerBooking: e.target.value,
              })
            }
            onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          />
        </FormRow>
        <FormRow label="Breakfast price">
          <Input
            type="number"
            id="breakfast-price"
            value={formValues.breakfastPrice}
            disabled={readOnly || isUpdating}
            onChange={(e) =>
              setFormValues({ ...formValues, breakfastPrice: e.target.value })
            }
            onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          />
        </FormRow>
      </Form>
      {readOnly && (
        <p style={{ textAlign: "end" }}>
          In order to change settings, please ask your admin
        </p>
      )}
    </>
  );
}

export default UpdateSettingsForm;
