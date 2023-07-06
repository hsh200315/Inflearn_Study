import React, {useState} from "react";
import Title from "./Title"

export default function App(){
  const TITLE = "Hello Korea!";

  return(
    <div className="wrapper">
      <Title title = {TITLE} />
    </div>
  )
}