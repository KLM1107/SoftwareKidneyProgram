import React from "react";
import MainLayout from "../../components/MainLayout";
import { Account } from "../../services/typeProps";
import DoctorManagementComponent from "../../components/hospital/DoctorManagementComponent";

const Management = () => {
  const user: Account = JSON.parse(sessionStorage.getItem("userData") ?? "");

  return (
    <MainLayout
      pageTitle="Patient management"
      pageName="Management"
      mainData={<DoctorManagementComponent />}
      user={user}
    />
  );
};

export default Management;
