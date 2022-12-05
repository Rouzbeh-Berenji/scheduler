export function getAppointmentsForDay(state, day) {
    //find d (day) object that match with the given day as an argument
    const dayObj = state.days.find(d => d.name === day);
    const result = [];

    if (!dayObj) { return result;}
    // matching appoinments id from the selected day to appoinments object
    for(let id of dayObj.appointments){
      const appointment = state.appointments[id]
      result.push(appointment)
    }
      return result;
  };


  
  export function getInterview(state, interview) {
    if (interview === null) {
      return null;
    }
    // get the id of the interviewer from the interview
    let interviewerID = interview.interviewer;
    // get the interviewer info as we now have their id
    const interviewerInfo = state.interviewers[interviewerID];
    // copy all the info and update just the interviewer property
    return {...interview, interviewer: interviewerInfo}
  }
  
  export function getInterviewersForDay(state, day) {
    //... returns an array of interviewers for that day
    let interviewerIdArray = [];
    let interviewerArray = [];
    for (const eachDay of state.days) {
      if (eachDay.name === day) {
        interviewerIdArray = eachDay.interviewers;
      }
    }
  
    if (interviewerIdArray.length === 0) {
      return [];
    }
  
    for (const interviewer of interviewerIdArray) {
      interviewerArray.push(state.interviewers[interviewer]);
    }
    return interviewerArray;
  }