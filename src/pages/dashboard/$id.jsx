import { useParams } from "react-router-dom";

export default function DashboardID() {
  const { id } = useParams();
  return <div>Navigated to page "{id}"</div>;
}
