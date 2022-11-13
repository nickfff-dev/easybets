

const calculateTimeLeft = (endDate) => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();

  let endDatecalc = new Date(endDate);

  let differences = endDatecalc.getTime() - new Date().getTime();



  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (differences > 0) {
    timeLeft = {
      days: Math.floor(differences / (1000 * 60 * 60 * 24)),
      hours: Math.floor((differences / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((differences / 1000 / 60) % 60),
      seconds: Math.floor((differences / 1000) % 60),
    };
  }

  return timeLeft;
};



export default calculateTimeLeft;
