
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctors } from './doctors'
import { DoctorsApi } from './doctors-service'


$(document).ready(() => {
  let doctors = new Doctors()
    (async () => {
      let api = new DoctorsApi
      await api.getDoctorList(true, 'tomfgfhjk')
    })();
  console.log(doctors.doctorsList);

})