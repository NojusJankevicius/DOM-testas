const serverURL = 'http://localhost:3000';

class API {
  static getApartments = (success, failure) => {
    setTimeout(() => {
      fetch(`${serverURL}/apartments`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
    }, 1000);
  }

  static deleteApartment = (id, success, failure) => {
    fetch(`${serverURL}/apartments/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }
}

// API.getApartments(
//   (duomenys) => console.log('gavau duomenis', duomenys), // success
//   (klaida) => console.error('klaida!!!!', klaida) // failure
// )


// API.deleteApartment(
//   '1', // id
//   (duomenys) => console.log('gavau duomenis', duomenys), // success
//   (klaida) => console.error('klaida!!!!', klaida) // failure
// )
