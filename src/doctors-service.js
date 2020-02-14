export class DoctorsApi {
  constructor() {
    this.doctors = []
  }
  async getDoctorList(isNameBool, name) {
    let nameAPIUrl = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=93de781a4625762135fb1a235aab4117`
    let symtomsAPIUrl = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5051,-122.6750,100&skip=2&limit=10&user_key=93de781a4625762135fb1a235aab4117`
    let body = {}
    try {
      if (isNameBool) {
        let response = await fetch(nameAPIUrl);
        body = await response.json();
      } else {
        let response = await fetch(symtomsAPIUrl);
        body = await response.json();
      }
      let { data } = body
      data.forEach(doctor => {
        let tempObj = {};
        let { profile: { first_name, middle_name, last_name, image_url }, practices } = doctor;
        let { accepts_new_patients, visit_address: { city, street, zip, state }, phones } = practices[0];
        tempObj = { image_url, first_name, middle_name, last_name, accepts_new_patients, city, street, zip, state, phones };
        this.doctors.push(tempObj)
      })
      return this.doctors
    }
    catch (error) {
      console.error("ERROR ERROR!" + error.message)
    }
  }
}