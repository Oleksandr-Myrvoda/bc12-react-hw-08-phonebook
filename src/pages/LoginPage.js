import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth";
import styles from "../components/ContactForm/ContactForm.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.pageBox}>
      <h1>Login page</h1>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={styles.loginForm}
      >
        <label className={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}
