
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctors } from './doctors'
import { DoctorsApi } from './doctors-service'

let doctors = new Doctors()
$(document).ready(() => {
  $('#nameForm').submit(event => {
    event.preventDefault();
    $('#found').empty()
    let name = $('#name').val();
    (async () => {
      let api = new DoctorsApi(doctors);
      doctors.doctorsList = await api.getDoctorList(true, name);
      if (!doctors.doctorsList) {
        $('#error').removeClass('no-display')
      } else if (doctors.doctorsList.length < 1) {
        $('#no-data').removeClass('no-display')
      } else {
        console.log(doctors)
        doctors.doctorsList.forEach((doctor, i) => {
          let { first_name, middle_name, last_name, accepts_new_patients, city, street, zip, state, phones } = doctor;
          $('#found').append(`
        <div>
          <h2>DR. ${first_name} ${middle_name ? middle_name : ''} ${last_name}</h2>
          <h3>Accepts new patients: ${ accepts_new_patients ? 'Yes' : 'No'}.</h3>
          <h3>Adress: ${street}, ${city}, ${state}, ${zip}. </h3>
          <div id="phones${i}">
          </div>
        </div>
        `);
          phones.forEach(phone => {
            $(`#phones${i}`).append(`<h6>Phone: ${phone.number}: Type: ${phone.type} </h6>`);
          });
        });
      }
    })();
  })
})
