export class DoctorsApi {
  constructor() {
    this.doctors = [];
  }
  async getDoctorList(isNameBool, name) {
    let nameAPIUrl = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=${process.env.API_KEY}`;
    let symtomsAPIUrl = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5051,-122.6750,100&skip=2&limit=10&user_key=${process.env.API_KEY}`;
    let body;
    let response;
    try {
      if (isNameBool) {
        response = await fetch(nameAPIUrl);
      } else {
        response = await fetch(symtomsAPIUrl);
      }
      if (response.ok && response.status == 200) {
        body = await response.json();
        let { data } = body;
        data.forEach(doctor => {
          let tempObj = {};
          let { profile: { first_name, middle_name, last_name }, practices } = doctor;
          let { accepts_new_patients, visit_address: { city, street, zip, state }, phones } = practices[0];
          tempObj = { first_name, middle_name, last_name, accepts_new_patients, city, street, zip, state, phones };
          this.doctors.push(tempObj);
        })
        return this.doctors;
      } else {
        return false;
      }
    }
    catch (error) {
      console.error("ERROR ERROR!" + error.message);
    }
  }
}
