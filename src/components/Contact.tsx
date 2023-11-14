"use client";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/button";
import Image from "next/image";

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${data.subject}&body=Hi, My name is ${data.name} and I would like to contact you regarding: ${data.message}.`;
  };
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col h-screen overflow-hidden w-full
   px-5 items-center pt-20 xs:pt-10 max-w-7xl mx-auto gap-5 md:gap-20
  "
    >
      <h3 className="text-center uppercase tracking-[20px] text-2xl text-primary/60">
        Contact
      </h3>

      <h4 className="text-4xl font-semibold text-center">
        {"Possibilities are Endless,"}
        <br />
        {"Let's Talk!"}
      </h4>
      <form
        className="flex flex-col space-y-2 w-fit max-w-full mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row gap-2">
          <input
            className="contactInput"
            placeholder="Name"
            type="text"
            {...register("name", { required: true })}
          />

          <input
            className="contactInput"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
        </div>

        <input
          className="contactInput"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />

        <textarea
          className="contactInput min-h-[100px] max-h-36"
          placeholder="Message"
          {...register("message", { required: true })}
        />
        <Button type="submit">Submit</Button>
      </form>

      <Image
        src={"/omerLogo.svg"}
        alt="main Logo"
        width={100}
        height={100}
        className="dark:filter dark:invert h-24 w-24 xs:h-32 xs:w-32"
      />
    </motion.section>
  );
};

export default Contact;
