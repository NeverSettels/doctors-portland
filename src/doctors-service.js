export class Doctors {
  constructor() {
  }

  async getDoctorList() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=93de781a4625762135fb1a235aab4117`);
      let body = await response.json();
      console.log(body);

    }
    catch (error) {
      console.error("ERROR ERROR!" + error.message)
    }
  }
}