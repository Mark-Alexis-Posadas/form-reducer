import { Link, Outlet } from "react-router-dom";
export default function Eras() {
  return (
    <div>
      <h1>The Eras of Time</h1>
      <ul>
        <li>
          <Link to="nested-one">Nested One</Link>
        </li>
        <li>
          <Link to="nested-two">Nested Two</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
