import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Links to Terms and Conditions, Contact Us, Privacy Policy, and Refund Policies */}
      <Typography variant="body1">
        <Link href="/terms-and-conditions" color="inherit" underline="hover">
          Terms and Conditions
        </Link>{" "}
        |{" "}
        <Link href="/contact-us" color="inherit" underline="hover">
          Contact Us
        </Link>{" "}
        |{" "}
        <Link href="/privacy-policy" color="inherit" underline="hover">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/refund-policies" color="inherit" underline="hover">
          Refund Policies
        </Link>{" "}
        | © Innotrat 2023
      </Typography>
    </Box>
  );
}
