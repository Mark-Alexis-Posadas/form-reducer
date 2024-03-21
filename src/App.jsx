import { useReducer } from "react";
import Input from "./components/Input";

const data = [
  {
    id: 1,
    text: "First Name",
    field: "firstName",
  },
  {
    id: 2,
    text: "Last Name",
    field: "lastName",
  },
  {
    id: 3,
    text: "User Name",
    field: "userName",
  },
  {
    id: 4,
    text: "Email",
    field: "email",
  },
  {
    id: 5,
    text: "Password",
    field: "password",
  },
  {
    id: 6,
    text: "Confirm Password",
    field: "confirmPassword",
  },
];

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",
  gender: "",
  submittedData: null,
  theme: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SUBMIT_FORM":
      return {
        ...state,
        submittedData: { ...state },
      };
    case "TOGGLE_THEME":
      return { ...state, theme: !state.theme };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value: value,
    });
  };

  const handleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  return (
    <div className="min-h-screen grid grid-cols-2 gap-9 p-10">
      <form>
        {data.map((d) => (
          <div key={d.id} className="mb-4">
            <Input
              placeholder={d.text}
              name={d.field}
              id={d.field}
              type="text"
              className="w-full p-2 bg-white shadow-md"
            />
          </div>
        ))}
      </form>

      <div className="flex flex-col items-end">
        <button
          className="bg-purple-700 rounded p-2 text-white"
          onClick={handleTheme}
        >
          {state.theme ? "Toggle Light" : "Toggle Dark"}
        </button>
        {state.submittedData && (
          <ul className="w-full">
            <li className="mb-3">
              First Name: {state.submittedData.firstName}
            </li>
            <li className="mb-3">Last Name: {state.submittedData.lastName}</li>
            <li className="mb-3">Email: {state.submittedData.email}</li>
            <li className="mb-3">User Name: {state.submittedData.userName}</li>
            <li className="mb-3">Password: {state.submittedData.password}</li>
            <li className="mb-3">
              Confirm Password: {state.submittedData.confirmPassword}
            </li>
            <li className="mb-3">Gender: {state.submittedData.gender}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
