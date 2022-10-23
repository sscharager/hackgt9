import * as React from "react";
import BuildingInfo from './componets/buildingInfo';
import Header from './componets/header.tsx';
import LogIn from './componets/logIn.tsx';


export default function LoginView() {
  return (
    <div>
      <Header/>
      <BuildingInfo/>
      <LogIn/>
    </div>
  );
}
