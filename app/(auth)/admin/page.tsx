import React from "react";
import Card from "../_components/Card";
import { AdminDashboardLINKS } from "@/constants";

const AdminPage = () => {
  return (
    <>
      <section id="adminpage" className="wrapper container">
        <h1 className="h2-bold py-6">Admin Page</h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
          {AdminDashboardLINKS.map((item, idx) => (
            <Card key={idx} title={item.label} url={item.url} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AdminPage;
