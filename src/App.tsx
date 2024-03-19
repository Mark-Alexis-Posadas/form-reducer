import { useReducer } from "react";
import Input from "./components/Input";

type InitialStateType = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  gender: string;
  submittedData: any; // You might want to replace 'any' with a more specific type
  theme: boolean;
};

const data = [
  {
    id: 1,
    text: "First Name",
  },
  {
    id: 2,
    text: "Last Name",
  },
  {
    id: 3,
    text: "User Name",
  },
  {
    id: 4,
    text: "Email",
  },
  {
    id: 5,
    text: "Password",
  },
  {
    id: 6,
    text: "Confirm Password",
  },
];

const initialState: InitialStateType = {
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

  return (
    <form>
      {data.map((d) => (
        <div key={d.id}>
          <label>{d.text}</label>
          <Input
            placeholder="first name"
            name="firstName"
            id="first_name"
            type="text"
            className="w-full p-2 bg-white shadow-md"
            value={state[d.field]}
          />
        </div>
      ))}
      <button className="text-white bg-purple-600 rounded p-2">Submit</button>
    </form>
  );
}
