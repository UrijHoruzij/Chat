import React from "react";
import PropTypes from "prop-types";
import orderBy from "lodash/orderBy";

import DialogItem from "../DialogItem";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, currentDialogId }) => {
  return (
    <div className="dialogs">
      {items.length ? (
        orderBy(items, ["date"], ["desc"]).map((item) => (
          <DialogItem
            key={item.id}
            userId={userId}
            currentDialogId={currentDialogId}
            {...item}
          />
        ))
      ) : (
        <div className="dialogs-info">Ничего не найдено</div>
      )}
    </div>
  );
};

Dialogs.defaultProps = {
  items: [],
};

Dialogs.propTypes = {
  items: PropTypes.array,
  userId: PropTypes.string,
  currentDialogId: PropTypes.string,
};

export default Dialogs;
