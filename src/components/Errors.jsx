import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main>
      <h3 id="error-heading">404 - Page not found!</h3>
      <p id="error-message">Cannot find path</p>
      <Link id="link-to-home" to="/">
        Let's go home
      </Link>
    </main>
  );
}
