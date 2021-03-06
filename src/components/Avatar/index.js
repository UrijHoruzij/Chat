import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { generateAvatar } from "../../utils/helpers";

import "./Avatar.scss";

const Avatar = ({ user, size, onClick, className }) => {
  const { color } = generateAvatar(user._id);
  const firstChar = user.fullname[0].toUpperCase();
  return (
    <div
      className={classNames(
        "avatar",
        {
          "avatar--small": size === "small",
          "avatar--medium": size === "medium",
          "avatar--large": size === "large",
        },
        className
      )}
      onClick={onClick}
    >
      {user.avatar ? (
        <img
          className={classNames("avatar__img", {
            "avatar__img--small": size === "small",
            "avatar__img--medium": size === "medium",
            "avatar__img--large": size === "large",
          })}
          src={user.avatar}
          alt={user.fullname}
        />
      ) : (
        <div
          className={classNames("avatar--symbol", {
            "avatar--symbol-small": size === "small",
            "avatar--symbol-medium": size === "medium",
            "avatar--symbol-large": size === "large",
          })}
          style={{
            background: `${color}`,
          }}
        >
          {firstChar}
        </div>
      )}
      {user.isOnline && (
        <div
          className={classNames("avatar__is-online", {
            "avatar__is-online--small": size === "small",
            "avatar__is-online--medium": size === "medium",
            "avatar__is-online--large": size === "large",
          })}
        ></div>
      )}
    </div>
  );
};

Avatar.defaulProps = {
  user: {},
};

Avatar.propTypes = {
  user: PropTypes.object,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Avatar;
