import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorsApi } from './doctors-service';

$(document).ready(() => {
  $('#nameForm').on( 'click', 'button' ,event => {
    event.preventDefault();
   let searchType = event.target.id;   
    $('#found').empty();
    let name = $('#name').val();
    (async () => {
      let api = new DoctorsApi();
      if(searchType==='name'){
        api.list = await api.getDoctorList(true, name);
      }else{
        api.list = await api.getDoctorList(false, name);
      }
      if (!api.list) {
        $('#error').removeClass('no-display');
      } else if (api.list.length < 1) {
        $('#no-data').removeClass('no-display');
      } else {
        api.list.forEach((doctor, i) => {
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