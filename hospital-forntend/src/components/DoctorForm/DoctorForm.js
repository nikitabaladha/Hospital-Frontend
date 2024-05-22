// // components/DoctorForm/DoctorForm.js

// import React from "react";

// const DoctorForm = ({
//   firstName,
//   lastName,
//   email,
//   mobileNumber,
//   dob,
//   address,
//   city,
//   state,
//   country,
//   zipCode,
//   speciality,
//   experience,
//   qualification,
//   fees,
//   handleSubmit,
//   handleOnChange,
//   error,
// }) => {
//   return (
//     <div>
//       <h2>Doctor Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             value={firstName}
//             onChange={handleOnChange}
//             name="firstName"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             value={lastName}
//             onChange={handleOnChange}
//             name="lastName"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={handleOnChange}
//             name="email"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="mobileNumber">Mobile Number:</label>
//           <input
//             type="tel"
//             value={mobileNumber}
//             onChange={handleOnChange}
//             name="mobileNumber"
//             pattern="[0-9]{10}"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="dob">Date of Birth:</label>
//           <input
//             type="date"
//             value={dob}
//             onChange={handleOnChange}
//             name="dob"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="address">Address:</label>
//           <input
//             type="text"
//             value={address}
//             onChange={handleOnChange}
//             name="address"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="city">City:</label>
//           <input
//             type="text"
//             value={city}
//             onChange={handleOnChange}
//             name="city"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="state">State:</label>
//           <input
//             type="text"
//             value={state}
//             onChange={handleOnChange}
//             name="state"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="country">Country:</label>
//           <input
//             type="text"
//             value={country}
//             onChange={handleOnChange}
//             name="country"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="zipCode">Zip Code:</label>
//           <input
//             type="text"
//             value={zipCode}
//             onChange={handleOnChange}
//             name="zipCode"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="speciality">Speciality:</label>
//           <select
//             value={speciality}
//             onChange={handleOnChange}
//             name="speciality"
//             required
//           >
//             <option value="" disabled>
//               Select Speciality
//             </option>
//             <option value="Cardiologist">Cardiologist</option>
//             <option value="Dentist">Dentist</option>
//             <option value="Orthopedics">Orthopedics</option>
//             <option value="Gynecologist">Gynecologist</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="qualification">Qualification:</label>
//           <select
//             value={qualification}
//             onChange={handleOnChange}
//             name="qualification"
//             required
//           >
//             <option value="" disabled>
//               Select Qualification
//             </option>
//             <option value="MBBS">MBBS</option>
//             <option value="MS">MS</option>
//             <option value="MD">MD</option>
//             <option value="BAMS">BAMS</option>
//             <option value="BHMS">BHMS</option>
//             <option value="BPT">BPT</option>
//             <option value="B.Vsc">B.Vsc</option>
//             <option value="BUMS">BUMS</option>
//             <option value="BSMS">BSMS</option>
//             <option value="BNYS">BNYS</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="experience">Years of Experience:</label>
//           <input
//             type="number"
//             value={experience}
//             onChange={handleOnChange}
//             name="experience"
//             min="0"
//             placeholder="Enter years of experience"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="fees">Fees:</label>
//           <input
//             type="number"
//             value={fees}
//             onChange={handleOnChange}
//             name="fees"
//             min="0"
//             placeholder="Enter fees"
//             required
//           />
//         </div>

//         {error && <p className="error">{error}</p>}

//         <button type="submit">Submit Form</button>
//       </form>
//     </div>
//   );
// };

// export default DoctorForm;

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
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dentist">Dentist</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Gynecologist">Gynecologist</option>
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
