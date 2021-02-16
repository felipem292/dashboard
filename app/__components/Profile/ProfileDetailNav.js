import React from "react";
import { Badge } from "../../components";
import { LoaderImage } from "../LoaderImage/LoaderImage";

const ProfileDetailNav = (props) => {
  const user = props.user;

  return (
    <React.Fragment>
      {!user ? (
        <div className="mb-4 text-center">
          <LoaderImage text={" Loading ..."} />
        </div>
      ) : (
        Object.keys(user).length > 3 &&
        user && (
          <div className="h3 mt-2 text-center">
            <h5>
              <Badge color="warning">Logged in as Administrator</Badge>
            </h5>
          </div>
        )
      )}
    </React.Fragment>
  );
};

export { ProfileDetailNav };
