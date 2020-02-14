export class Doctors {
  constructor() {
  }

  async getDoctorList() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${process.env.API_KEY}`);
      let body = await response.json();
    }
    catch (error) {
      console.error("ERROR ERROR!" + error.message)
    }
  }
}