export const getCurrentDate = ()=>{
    const date = new Date();
    let currentDate = {
      date: date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      }),
      time: date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      hour: date.toLocaleTimeString([], {
        hour: "2-digit",
      })
    };
    return currentDate;
}

export const currentDate = getCurrentDate()