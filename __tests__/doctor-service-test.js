import { Doctors } from '../src/doctors-service'

describe('getDoctorlist', () => {
  test('check that doctor list returns an object', () => {
    (async () => {
      let doctors = new Doctors()
      doctors.getDoctorList()
      expect(doctors.doctorsList).toEqual({});
    })();
  });
});