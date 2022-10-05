import { Box} from "@mui/material";

import SingleKnowHow from "./SingleKnowHow";
import Appbar from "../../components/appbar";
import { View } from "../../styles/auth";

import Footer from "../../components/footer/Footer";

export default function Exchanges() {
  return (
    <Box sx={{width: "100wh",
    height: "100vh",}}>
     <Appbar />
       <SingleKnowHow />
      <Footer />
    </Box>
  );
}
