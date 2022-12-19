import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faMailBulk,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../features/counter/counterSlice";

export default function Footer() {
  const page = useSelector((state) => state.glob.page);
  const dispatch = useDispatch();
  return (
    <div className="max-lg:bg-white fixed max-lg:left-0 max-lg:bottom-0 max-lg:w-full max-lg:flex max-lg:justify-around max-lg:shadow py-2 lg:right-8 lg:top-1/4 ">
      <div className={page === "home"?"footer-btn-active":"footer-btn"} onClick={()=>dispatch(actions.pageToggle("home"))}>
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className={page === "user"?"footer-btn-active":"footer-btn"} onClick={()=>dispatch(actions.pageToggle("user"))}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className={page === "briefCase"?"footer-btn-active":"footer-btn"} onClick={()=>dispatch(actions.pageToggle("briefCase"))}>
        <FontAwesomeIcon icon={faBriefcase} />
      </div>
      <div className={page === "mail"?"footer-btn-active":"footer-btn"} onClick={()=>dispatch(actions.pageToggle("mail"))}>
        <FontAwesomeIcon icon={faMailBulk} />
      </div>
      <div className={page === "comment"?"footer-btn-active":"footer-btn"} onClick={()=>dispatch(actions.pageToggle("comment"))}>
        <FontAwesomeIcon icon={faComment} />
      </div>
    </div>
  );
}
