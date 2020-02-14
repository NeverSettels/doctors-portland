export class Doctors {
  constructor() {
    this.doctorsList = []
  }

  async getDoctorList(isNameBool, name = undefined) {
    let nameAPIUrl = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=93de781a4625762135fb1a235aab4117`
    let symtomsAPIUrl = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5051,-122.6750,100&skip=2&limit=10&user_key=93de781a4625762135fb1a235aab4117`
    let response;
    try {
      if (isNameBool) {
        response = await fetch(nameAPIUrl);
      } else {
        response = await fetch(symtomsAPIUrl);
      }

      let body = await response.json();
      console.log(body);

    }
    catch (error) {
      console.error("ERROR ERROR!" + error.message)
    }
  }
}