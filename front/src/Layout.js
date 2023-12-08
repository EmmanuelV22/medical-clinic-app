import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import injectContext from "./store/appContext";
import Register from "./components/Register";
import DashboardAdmin from "./views/admin/DashboardAdmin";
import DashboardPatient from "./views/patients/DashboardPatient";
import DashboardDoctor from "./views/employees/DashboardDoctor";
import AdminAllPatients from "./views/admin/AdminAllPatients";
import AdminAllEmployees from "./views/admin/AdminAllEmployees";
import EmployeeDetail from "./components/admin/EmployeeDetail";
import SpecialistPicker from "./components/SpecialistPicker";

import CreateTreatment from "./views/employees/CreateTreatment";

import MyPatients from "./views/employees/MyPatients";
import MyAppointments from "./views/employees/MyAppointments";
import PatientData from "./views/employees/PatientData";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard-admin" element={<DashboardAdmin />}></Route>
        <Route path="/dashboard-patient" element={<DashboardPatient />}></Route>
        <Route path="/dashboard-doctor" element={<DashboardDoctor />}></Route>
        <Route path="/pacientes" element={<AdminAllPatients />}></Route>
        <Route path="/patients/:id" element={<PatientData />}></Route>
        <Route path="/mis-pacientes" element={<MyPatients />}></Route>
        <Route path="/mis-turnos" element={<MyAppointments />}></Route>
        <Route path="/empleados" element={<AdminAllEmployees />}></Route>
        <Route path="/employees/:id" element={<EmployeeDetail />}></Route>
        <Route path="/appointment-post" element={<SpecialistPicker />}></Route>
        <Route path="/new-treatment" element={<CreateTreatment />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
