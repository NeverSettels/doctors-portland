
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctors } from './doctors'
import { DoctorsApi } from './doctors-service'

let doctors = new Doctors()
$(document).ready(() => {
  $('#nameForm').submit(event => {
    event.preventDefault()
    console.log('eeee');

    (async () => {
      let api = new DoctorsApi(doctors);
      await api.getDoctorList(true, 'tom');
      console.log(doctors.doctorsList);
    })();
  })
})