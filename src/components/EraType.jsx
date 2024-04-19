import { useParams } from "react-router-dom";

export default function EraType() {
  const { type } = useParams();

  return (
    <div>
      <hr />
      <h3>The {type} Era</h3>
    </div>
  );
}
