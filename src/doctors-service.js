export class DoctorsApi {
  constructor(doctors) {
    this.doctors = doctors
  }
  async getDoctorList(isNameBool, name) {
    let nameAPIUrl = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=93de781a4625762135fb1a235aab4117`
    let symtomsAPIUrl = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5051,-122.6750,100&skip=2&limit=10&user_key=93de781a4625762135fb1a235aab4117`


    try {
      if (isNameBool) {
        let response = await fetch(nameAPIUrl);
        let body = await response.json();
        this.doctors.doctorsList = body
      } else {
        let response = await fetch(symtomsAPIUrl);
        let body = await response.json();
        this.doctors.doctorsList = body
      }
    }
    catch (error) {
      console.error("ERROR ERROR!" + error.message)
    }
  }
}