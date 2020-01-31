import React, { useState } from "react";

const Example2 = () => {
  const [fname, setfname] = useState("pranshu");
  const [lname, setlname] = useState("mishra");

  return (
    <div>
      <h4>Enter your first Name</h4>
      <input
        id="fname"
        type="text"
        name="fname"
        value={fname}
        onChange={event => setfname(event.target.value)}
      />
      <hr />
      <h4>Enter your last name </h4>
      <input
        type="text"
        name="lname"
        value={lname}
        onChange={event => setlname(event.target.value)}
      />
    </div>
  );
};
export default Example2;
