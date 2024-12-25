// app/routes/segmentation.tsx
import { Outlet } from "@remix-run/react";

export default function SegmentationLayout() {
  return (
    <div>
      <h1>Dashboard Section</h1>
      <Outlet />
    </div>
  );
}