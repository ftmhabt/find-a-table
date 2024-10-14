import { CircularProgress } from "@mui/material";
import Header from "../ui/restaurant/header";

export default function loading() {
  return (
    <>
      <Header>
        <CircularProgress color="inherit" size={24} />
      </Header>
      <div className="flex items-center justify-center h-96">
        <CircularProgress color="inherit" size={24} />
      </div>
    </>
  );
}
