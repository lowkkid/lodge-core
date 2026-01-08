import styles from "./Login.module.css";
import LoginForm from "../features/authentication/LoginForm.jsx";
import Heading from "../ui/Heading.jsx";
import Logo from "../ui/Logo.jsx";

function Login() {
  return (
    <main className={styles["login"]}>
      <Logo />
      <Heading size="lg" style={{ textAlign: "center" }}>
        Log in to your account
      </Heading>
      <LoginForm />
    </main>
  );
}

export default Login;
