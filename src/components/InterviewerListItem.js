import React from "react";
import 'components/InterviewerListItem.scss'
import classNames from 'classnames';

export default function InterviewerListItem (props){
const interviewerClass = classNames("interviewer__item" ,{
  "interviewers__item--selected": props.selected}
);
const showName = function (props) {
  if (props.selected) {
    return props.name
  } 
};

return (
<li onClick = {() => props.setInterviewer(props.id)} 
  className={interviewerClass}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {showName(props)} 
</li>
);
}