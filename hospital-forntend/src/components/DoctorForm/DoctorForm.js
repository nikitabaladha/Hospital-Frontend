// components/DoctorForm/DoctorForm.js

import React from "react";
import "./DoctorForm.css";

const DoctorForm = ({
  firstName,
  lastName,
  email,
  mobileNumber,
  dob,
  address,
  city,
  state,
  country,
  zipCode,
  speciality,
  experience,
  qualification,
  fees,
  handleSubmit,
  handleOnChange,
  error,
}) => {
  return (
    <div className="container mt-5">
      <h2>Doctor Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            value={firstName}
            onChange={handleOnChange}
            name="firstName"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            value={lastName}
            onChange={handleOnChange}
            name="lastName"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={handleOnChange}
            name="email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number:
          </label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={handleOnChange}
            name="mobileNumber"
            pattern="[0-9]{10}"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth:
          </label>
          <input
            type="date"
            value={dob}
            onChange={handleOnChange}
            name="dob"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            value={address}
            onChange={handleOnChange}
            name="address"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            value={city}
            onChange={handleOnChange}
            name="city"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State:
          </label>
          <input
            type="text"
            value={state}
            onChange={handleOnChange}
            name="state"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country:
          </label>
          <input
            type="text"
            value={country}
            onChange={handleOnChange}
            name="country"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zipCode" className="form-label">
            Zip Code:
          </label>
          <input
            type="text"
            value={zipCode}
            onChange={handleOnChange}
            name="zipCode"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="speciality" className="form-label">
            Speciality:
          </label>
          <select
            value={speciality}
            onChange={handleOnChange}
            name="speciality"
            className="form-select"
            required
          >
            <option value="" disabled>
              Select Speciality
            </option>
            <option value="Allergist">Allergist</option>
            <option value="Anesthesiologist">Anesthesiologist</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Emergency Medicine Specialist">
              Emergency Medicine Specialist
            </option>
            <option value="Endocrinologist">Endocrinologist</option>
            <option value="Family Medicine Physician">
              Family Medicine Physician
            </option>
            <option value="Gastroenterologist">Gastroenterologist</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Hematologist">Hematologist</option>
            <option value="Infectious Disease Specialist">
              Infectious Disease Specialist
            </option>
            <option value="Internist">Internist</option>
            <option value="Nephrologist">Nephrologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Oncologist">Oncologist</option>
            <option value="Ophthalmologist">Ophthalmologist</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Otolaryngologist (ENT)">
              Otolaryngologist (ENT)
            </option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="Pulmonologist">Pulmonologist</option>
            <option value="Radiologist">Radiologist</option>
            <option value="Rheumatologist">Rheumatologist</option>
            <option value="Surgeon">Surgeon</option>
            <option value="Urologist">Urologist</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="qualification" className="form-label">
            Qualification:
          </label>
          <select
            value={qualification}
            onChange={handleOnChange}
            name="qualification"
            className="form-select"
            required
          >
            <option value="" disabled>
              Select Qualification
            </option>
            <option value="MBBS">MBBS</option>
            <option value="MS">MS</option>
            <option value="MD">MD</option>
            <option value="BAMS">BAMS</option>
            <option value="BHMS">BHMS</option>
            <option value="BPT">BPT</option>
            <option value="B.Vsc">B.Vsc</option>
            <option value="BUMS">BUMS</option>
            <option value="BSMS">BSMS</option>
            <option value="BNYS">BNYS</option>
            <option value="M.Ch">M.Ch</option>
            <option value="DM">DM</option>
            <option value="DNB">DNB</option>
            <option value="Diploma in Child Health (DCH)">
              Diploma in Child Health (DCH)
            </option>
            <option value="Diploma in Gynaecology and Obstetrics (DGO)">
              Diploma in Gynaecology and Obstetrics (DGO)
            </option>
            <option value="Diploma in Orthopaedics (D.Ortho)">
              Diploma in Orthopaedics (D.Ortho)
            </option>
            <option value="Diploma in Dermatology, Venereology, and Leprosy (DDVL)">
              Diploma in Dermatology, Venereology, and Leprosy (DDVL)
            </option>
            <option value="Diploma in Medical Radio Diagnosis (DMRD)">
              Diploma in Medical Radio Diagnosis (DMRD)
            </option>
            <option value="BSc Nursing">BSc Nursing</option>
            <option value="MSc Nursing">MSc Nursing</option>
            <option value="M.Pharm">M.Pharm</option>
            <option value="Pharm.D">Pharm.D</option>
            <option value="MPH (Master of Public Health)">
              MPH (Master of Public Health)
            </option>
            <option value="MHA (Master of Hospital Administration)">
              MHA (Master of Hospital Administration)
            </option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Years of Experience:
          </label>
          <input
            type="number"
            value={experience}
            onChange={handleOnChange}
            name="experience"
            min="0"
            placeholder="Enter years of experience"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fees" className="form-label">
            Fees:
          </label>
          <input
            type="number"
            value={fees}
            onChange={handleOnChange}
            name="fees"
            min="0"
            placeholder="Enter fees"
            className="form-control"
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
