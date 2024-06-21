import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect } from "react";
import { getArticleByID, getCommentsByArticleID } from "../../utils/api";
import CommentCard2 from "../Comments/CommentCard2";
import Badge from "@mui/material/Badge";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ArticleReviewCard = ({ article }) => {
  const [expanded, setExpanded] = React.useState(false);
  const { author, title, topic, created_at, votes, article_img_url, comment_count, article_id } =
    article;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getCommentsByArticleID(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  return (
    <Card sx={{ width: 345, margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={article_img_url} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          By {author}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {votes ? (
            <Badge badgeContent={votes} color="primary">
              <FavoriteIcon color="action" />
            </Badge>
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Typography color="#757575">Comments</Typography>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {comments.map((comment) => {
            if (comment.votes >= 1) {
              return <CommentCard2 article={article} comment={comment} key={comment.comment_id} />;
            }
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ArticleReviewCard;
