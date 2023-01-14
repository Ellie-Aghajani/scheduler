export function getAppointmentsForDay(state, day) {
    // find the day
    const foundDay = state.days.find((item) => item.name === day);
    if (!foundDay) {
      return [];
    }
  
    //find appointment for the given day
    const arr = foundDay.appointments;
    const mappedArr = arr.map((id) => {
      return state.appointments[id];
    });
  
    return mappedArr;
  }
  export function getInterview(state, interview) {
    if (!interview) {
      return null;
    }
    const id = interview.interviewer;
    const updatedInterview = {
      ...interview,
      interviewer: state.interviewers[id],
    };
    return updatedInterview;
  }
  
  export function getInterviewersForDay(state, day) {
    // find the interviewer
    const foundDay = state.days.find((item) => item.name === day);
    if (!foundDay) {
      return [];
    }
  
    //find appointment for the given day
    const arr = foundDay.interviewers;
    const mappedArr = arr.map((id) => {
      return state.interviewers[id];
    });
  
    return mappedArr;
  }