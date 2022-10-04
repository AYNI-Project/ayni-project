import { Stack, Box } from "@mui/material";
import Appbar from "../../components/appbar";
import SingleKnowHow from "./SingleKnowHow";

import Footer from "../../components/footer/Footer";

export default function Exchanges() {
  return (
    <Box>
      <Appbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SingleKnowHow />
      </Stack>
      <Footer />
    </Box>
  );
}
