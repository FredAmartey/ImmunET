import FieldComponnet from "@/components/shared/ReUseComponnets/FormComponnets/FieldComponnet";
import FieldSetComponnet from "@/components/shared/ReUseComponnets/FormComponnets/FieldSetComponent";
import { useForm } from "react-hook-form";

export default function AddCustomerComponnet() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="mx-auto lg:w-3/5 w-full shadow-2xl shadow-blue-500/20 mb-32 mt-20 px-12 lg:px-20 py-6">
      <form onSubmit={handleSubmit(submitForm)} className=" mx-auto  ">
        <FieldSetComponnet label="Enter Customer Details">
          <FieldComponnet label="Customer Name" error={errors.customerName}>
            <input
              {...register("customerName", { required: "Name is required" })}
              className={`${
                errors.customerName ? "border-red-400 outline-none" : ""
              } w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 mt-2`}
              type="text"
              name="customerName"
              id="customerName"
              placeholder="Enter customer name"
            />
          </FieldComponnet>
          <FieldComponnet label="Customer Email" error={errors.customerEmail}>
            <input
              {...register("customerEmail")}
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 mt-2"
              type="email"
              name="customerEmail"
              id="customerEmail"
              placeholder="Enter customer Email"
            />
          </FieldComponnet>
          <FieldComponnet label="Customer Phone" error={errors.customerPhone}>
            <input
              {...register("customerPhone", {
                required: "phone number is required",
              })}
              className={`${
                errors.customerPhone ? "border-red-400 outline-none" : ""
              } w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 mt-2 `}
              type="text"
              name="customerPhone"
              id="customerPhone"
              placeholder="Enter customer Phone"
            />
          </FieldComponnet>
          <FieldComponnet
            label="Customer Address"
            error={errors.customerAddress}
          >
            <input
              {...register("customerAddress")}
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 mt-2"
              type="text"
              name="customerAddress"
              id="customerAddress"
              placeholder="Enter customer Address"
            />
          </FieldComponnet>
          <FieldComponnet label="buton">
            <button className="bg-custom_button_color w-full  text-black uppercase font-semibold  relative h-[50px] border px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:w-full before:h-0 before:bg-primary_colour before:transition-all before:duration-700 hover:text-white  hover:before:top-0 hover:before:h-full">
              <span className="relative z-10">Continue</span>
            </button>
          </FieldComponnet>
        </FieldSetComponnet>
      </form>
    </div>
  );
}
