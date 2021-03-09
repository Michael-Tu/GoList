import React, { useState } from "react";
import { Card, CardBody, Media } from "reactstrap";
import DeleteListModal from "./delete-list-modal";

const ListCard = (props) => {
  const [showDeleteListForm, setShowDeleteListForm] = useState(false);
  const toggleDeleteListForm = () => setShowDeleteListForm(!showDeleteListForm);

  // TODO(tugan): fix formatting issues with different title length, or description lengths
  return (
    <Card className="hover:shadow-xl">
      <div className="multi-button">
        <button
          style={{ "font-size": "1.2rem" }}
          onClick={toggleDeleteListForm}
        >
          <i className="ion ion-android-delete" />
        </button>
        <DeleteListModal
          showDeleteListForm={showDeleteListForm}
          toggleDeleteListForm={toggleDeleteListForm}
          listName={props.listName}
        />
      </div>
      <CardBody>
        <Media>
          <img
            className="img-40 img-fluid m-r-20"
            src={props.icon_url}
            alt=""
          />
          <Media body>
            <h6 className="f-w-600">
              <a href={`https://goli.st/${props.listName}`}>{props.title}</a>
            </h6>
            <p>
              <a href={`https://goli.st/${props.listName}`}>
                goli.st/{props.listName}
              </a>
              {props.badge ? (
                <span className={`badge badge-${props.badge} pull-right`}>
                  {props.badgetxt}
                </span>
              ) : null}
            </p>
          </Media>
        </Media>
        <p>{props.body}</p>
      </CardBody>
    </Card>
  );
};

export default ListCard;
