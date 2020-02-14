
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
        <div class="dr-container">
          <h2 class="dr-name">DR. ${first_name} ${middle_name ? middle_name : ''} ${last_name}</h2>
          <p class="dr-patient"> <strong>Accepts new patients:</strong> ${ accepts_new_patients ? 'Yes' : 'No'}.</p>
          <p class="dr-adress"><strong>Adress:</strong> ${street}, ${city}, ${state}, ${zip}. </p>
          <div class="dr-phones" id="phones${i}">
          </div>
        </div>
        `);
          phones.forEach(phone => {
            $(`#phones${i}`).append(`<p> <strong>Phone:</strong> ${phone.number}</p><p> <strong>Type:</strong> ${phone.type} </p>`);
          });
        });
      }
    })();
  })
})
