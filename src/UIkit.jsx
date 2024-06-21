import React from "react";
import { Button, Input } from "tenjin-ui-kit";

const UIkit = () => {
  return (
    <>
      <div>UIkit</div>
      <Input
        placeholder="John Doe"
        label="Your Name"
        isRequired={false}
        isDisabled={true}
      />
      <Button variant="contained">Submit</Button>
    </>
  );
};

export default UIkit;
