import { CircularProgress } from "@mui/material";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-96">
      <CircularProgress color="inherit" size={24} />
    </div>
  );
}
