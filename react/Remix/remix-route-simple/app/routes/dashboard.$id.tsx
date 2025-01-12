// app/routes/dashboard.$id.tsx
import { useParams } from "@remix-run/react";

export default function DashboardDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Dashboard Detail for ID: {id}</h2>
    </div>
  );
}
