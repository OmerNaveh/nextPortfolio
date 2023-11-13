import React from "react";

const Contact = () => {
  const handleSubmit = () => {
    window.location.href = `mailto:${
      process.env.NEXT_PUBLIC_CONTACT_EMAIL
    }?subject=${""}&body=Hi, My name is ${""} and I would like to contact you regarding ${""}.`;
  };
  return <div>Contact</div>;
};

export default Contact;
