
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
    let name = $('#name').val();
    (async () => {
      let api = new DoctorsApi(doctors);
      doctors.doctorsList = await api.getDoctorList(true, name);
      if (doctors.doctorsList.length < 1) {
        $('#no-data').removeClass('no-display')
      }
      console.log(doctors.doctorsList);
    })();
  })
})