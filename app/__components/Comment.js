import React from "react";
import PropTypes from "prop-types";
import { Media } from "reactstrap";
import moment from "moment";
const status = ["success", "danger", "warning", "secondary"];

const Comment = (props) => (
  <Media className={`mb-4 ${props.mediaClassName} `}>
    <Media body>
      <div className="mb-2">
        <span className="text-inverse mr-2">{props.username}</span>
        <span className="small">{moment(props.comment_date).format("LL")}</span>
        <span
          className={
            "text-" +
            (props.type === "rejected" ? "danger" : "") +
            (props.type === "cancelled" ? "danger" : "") +
            (props.type === "accepted" ? "success" : "")
          }
        >
          {props.type === "rejected" ? " Rejected" : ""}
          {props.type === "cancelled" ? " Cancelled" : ""}
          {props.type === "accepted" ? " Accepted" : ""}
        </span>
      </div>
      <p className="mb-1">{props.comment}</p>
      <div></div>
    </Media>
  </Media>
);
Comment.propTypes = {
  mediaClassName: PropTypes.node,
};
Comment.defaultProps = {
  mediaClassName: "text-empty",
};

export { Comment };
