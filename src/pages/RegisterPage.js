import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth";
import styles from "../components/ContactForm/ContactForm.module.css";

export default function RegisterPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const updateName = (event) => {
    setName(event.target.value);
  };

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
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.pageBox}>
      <h1>Register page</h1>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={styles.registerForm}
      >
        <label className={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            type="text"
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
          Register
        </button>
      </form>
    </div>
  );
}
