import { Button } from "@mui/material";
import Content from "./content";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
export default function Home() {
  return (
    <div className="flex justify-center w-full ">
       <Content />
    </div>
  );
}
