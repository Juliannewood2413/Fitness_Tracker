init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
                                              //returns the class names of the continue-btn element, then adds d-none class
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

