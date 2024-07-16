import { useState } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { ScrollRestoration } from "react-router-dom";
import { toast } from "react-toastify";

const BookingForm = ({ onSubmit }) => {

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [carType, setCarType] = useState();
  const [paymentMethod, setPaymentMethod] = useState();

  const onsubmit = (form) => {
    form.preventDefault();

    if (
      !fullName?.length ||
      !location?.length ||
      !carType?.length ||
      !paymentMethod?.length ||
      !phoneNumber?.length
    ) {
      return toast.error("Please fill in all the required fields.");
    }
    onSubmit([
      {
        value: fullName,
        name: "fullName",
        label: "Full name",
      },
      {
        value: phoneNumber,
        name: "phoneNumber",
        label: "Phone Number",
      },
      {
        value: location,
        name: "location",
        label: "Location",
      },
      {
        value: carType,
        name: "carType",
        label: "Car Type",
      },
      {
        value: paymentMethod,
        name: "paymentMethod",
        label: "Payment method",
      },
    ]);
  };

  const cars = [
    "Honda",
    "Kia",
    "Hyundai",
    "Mitsubishi",
    "Ford",
    "Ford truck",
    "Toyota",
    "Mercedes Benz",
    "Nissan",
    "BWW",
  ];

  const payments = [
    "transfer",
    "cash",
    "online",
  ];

  return (
    <>
      <ScrollRestoration />

      <form
        onSubmit={onsubmit}
        className="mx-auto my-5 flex flex-col gap-5 *:mx-auto md:my-10 md:max-w-[75%]"
      >
        <Input
          label={"Full name"}
          placeholder={""}
          name={"fullName"}
          value={fullName}
          setValue={setFullName}
          error={""}
        />
        <Input
          label={"Phone Number"}
          placeholder={""}
          name={"phoneNumber"}
          value={phoneNumber}
          setValue={setPhoneNumber}
          error={""}
        />
        <Input
          label={"Location"}
          placeholder={""}
          name={"location"}
          value={location}
          setValue={setLocation}
          error={""}
        />

        {/* <Input
          label={"Car Type"}
          placeholder={""}
          name={"carType"}
          value={location}
          setValue={setCarType}
          error={""}
        /> */}
        <Select
          label={"Car Type"}
          name={"carType"}
          value={carType}
          setValue={setCarType}
          error={""}
          options={cars}
        />
        <Select
          label={"Payment method"}
          name={"paymentMethod"}
          value={paymentMethod}
          setValue={setPaymentMethod}
          error={""}
          options={payments}
        />

        <div className="my-5 grid w-full gap-5 !px-0 text-center *:w-full">
          <button
            type="submit"
            className="mx-auto max-w-[12rem] rounded bg-brand-red p-1 px-2 text-sm"
          >
            Book Now
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
