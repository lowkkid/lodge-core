import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings({ readOnly = false }) {
  return (
    <Row>
      <Heading size="lg">Update hotel settings</Heading>
      <UpdateSettingsForm readOnly={readOnly} />
    </Row>
  );
}

export default Settings;
