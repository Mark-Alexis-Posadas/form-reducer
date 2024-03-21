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
  {
    id: 7,
    text: "Gender",
    field: "gender",
    options: ["Male", "Female"],
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

    // Basic validation checks
    if (
      !state.firstName ||
      !state.lastName ||
      !state.email ||
      !state.userName ||
      !state.password ||
      !state.confirmPassword ||
      !state.gender
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password strength validation
    if (state.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    // You can add more criteria for password strength if needed

    // Password and Confirm Password match validation
    if (state.password !== state.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Dispatch form submission action if validation passes
    dispatch({ type: "SUBMIT_FORM" });
  };

  return (
    <div
      className={`min-h-screen grid grid-cols-2 gap-9 p-10 ${
        state.theme ? "bg-black" : "bg-white"
      }`}
    >
      <form>
        {data.map((d) => (
          <div key={d.id} className="mb-4">
            {d.options ? (
              <>
                <label
                  className={`${state.theme ? "text-white" : "text-black"}`}
                >
                  {d.text}
                </label>
                <div className="flex items-center">
                  {d.options.map((option) => (
                    <label
                      key={option}
                      className={`${
                        state.theme ? "text-white" : "text-black"
                      } flex items-center mr-3`}
                    >
                      <input
                        className="bg-white border-2 border-slate-400 w-5 h-5 mr-3"
                        type="radio"
                        name={d.field}
                        value={option}
                        checked={state[d.field] === option}
                        onChange={handleChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </>
            ) : (
              <Input
                placeholder={d.text}
                name={d.field}
                id={d.field}
                type="text"
                className="w-full p-2 bg-white shadow-md"
                handleChange={handleChange}
              />
            )}
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="bg-purple-700 text-white rounded p-2"
        >
          Submit
        </button>
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
            <li className={`mb-3 ${state.theme ? "text-white" : "text-black"}`}>
              First Name: {state.submittedData.firstName}
            </li>
            <li className={`mb-3 ${state.theme ? "text-white" : "text-black"}`}>
              Last Name: {state.submittedData.lastName}
            </li>
            <li className={`mb-3 ${state.theme ? "text-white" : "text-black"}`}>
              Email: {state.submittedData.email}
            </li>
            <li className={`mb-3 ${state.theme ? "text-white" : "text-black"}`}>
              User Name: {state.submittedData.userName}
            </li>
            <li className={`mb-3 ${state.theme ? "text-white" : "text-black"}`}>
              Password: {state.submittedData.password}
            </li>
            <li className={`mb-3 ${state.theme ? "text-white" : "text-black"}`}>
              Confirm Password: {state.submittedData.confirmPassword}
            </li>
            <li className={`mb-3 ${state.theme ? "text-white" : "text-black"}`}>
              Gender: {state.submittedData.gender}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
