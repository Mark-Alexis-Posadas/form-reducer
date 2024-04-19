import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center">
        <li>
          <NavLink className="mx-2 text-purple-500" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="mx-2 text-purple-500" to="/eras">
            Eras
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
