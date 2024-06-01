"use client"
import React from "react";
import { Admin, Resource } from "react-admin";

import UserList from "@/app/components/Admin/UserList";
import ProductList from "@/app/components/Admin/ProductList";
import CommandeList from "@/app/components/Admin/CommandeList";


const AdminPanel = () => {
  return (
    <div>
      <Admin >
       <h1>test</h1>
       <Resource name="utilisateurs" list={UserList}  />
          <Resource name="Restaurant" list={ProductList}  />
      <Resource name="Commandes" list={CommandeList}  /> 
      </Admin>
    </div>
  );
};

export default AdminPanel;
