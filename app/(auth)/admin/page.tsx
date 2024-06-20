import React from "react";
import Card from "../_components/Card";

const AdminPage = () => {
  return (
    <>
      <section id="adminpage" className="wrapper container">
        <h1 className="h2-bold py-6">Admin Page</h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
          <Card title="Downloads" url="/admin/downloads" />
          <Card title="Mods" url="/admin" />
          <Card title="Logs" url="/admin" />
          <Card title="Docs" url="/admin" />
        </div>
      </section>
    </>
  );
};

export default AdminPage;
