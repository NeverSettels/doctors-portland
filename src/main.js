import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctors } from './doctors';
import { DoctorsApi } from './doctors-service';

let doctors = new Doctors();
$(document).ready(() => {
  $('#nameForm').on( 'click', 'button' ,event => {
    event.preventDefault();
   let searchType = event.target.id;
   console.log(searchType);
   
    $('#found').empty();
    let name = $('#name').val();
    (async () => {
      let api = new DoctorsApi(doctors);
      if(searchType==='name'){
        doctors.doctorsList = await api.getDoctorList(true, name);
      }else{
        doctors.doctorsList = await api.getDoctorList(false, name);
      }
      if (!doctors.doctorsList) {
        $('#error').removeClass('no-display');
      } else if (doctors.doctorsList.length < 1) {
        $('#no-data').removeClass('no-display');
      } else {
        doctors.doctorsList.forEach((doctor, i) => {
          let { first_name, middle_name, last_name, accepts_new_patients, city, street, zip, state, phones } = doctor;
          $('#found').append(`
        <div class="dr-container">
          <h2 class="dr-name">Dr. ${first_name} ${middle_name ? middle_name : ''} ${last_name}</h2>
          <p class="dr-patient"> <strong>Accepts new patients:</strong> ${ accepts_new_patients ? 'Yes' : 'No'}.</p>
          <p class="dr-adress"><strong>Adress:</strong> ${street}, ${city}, ${state}, ${zip}. </p>
          <div class="dr-phones" id="phones${i}">
          </div>
        </div>
        `);
          phones.forEach(phone => {
            $(`#phones${i}`).append(`<p> <strong>Phone:</strong> <a href="tel:+${phone.number}"> ${phone.number}</a></p><p> <strong>Type:</strong> ${phone.type} </p>`);
          });
        });
      }
    })();
  });
  








});