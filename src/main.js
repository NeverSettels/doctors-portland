
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctors } from './doctors-service'
$(document).ready(() => {
  (async () => {
    let doctors = new Doctors()
    await doctors.getDoctorList(true, 'eric')
    console.log(doctors.doctorsList);
  })();


})