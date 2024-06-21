import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
}));

export default function CommentCard2({ comment, article }) {
  const { comment_id, body, author, votes } = comment;
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: "background.default",
        display: "grid",
        gridTemplateColumns: { md: "1fr" },
        gap: 2,
      }}
    >
      <Item elevation={24}>
        <Typography variant="subtitle2">{author}</Typography>
        <Typography>{body}</Typography>
      </Item>
    </Box>
  );
}
