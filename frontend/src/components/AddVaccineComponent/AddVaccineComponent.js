"use client";
import { useRef, useState } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
// Dynamically import CKEditor

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#eaecf0",
    height: "60px",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrites the different states of border
      borderColor: "#eaecf0",
    },
  }),
};

const AddVaccineComponent = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    frequency: 0,
    cost: 0,
    offset: 0,
    intervals: "",
    species: "",
    mandatory: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "mandatory") {
      newValue = value === "true";
    } else if (name === "intervals") {
      // If the value is an array, join its elements with a comma
      if (Array.isArray(value)) {
        newValue = value.join(",");
      }
      // If the value is a string with comma-separated values, keep it as is
      // If the value is neither an array nor a string, set it to an empty string
      else if (typeof value !== "string") {
        newValue = "";
      }
    } else if (value !== "" && !isNaN(value)) {
      // Add check for empty string
      newValue = parseFloat(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.SERVER_API}/doctors/1/vaccines`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to create vaccine");
      }

      const responseData = await response.json();
      setFormData({
        name: "",
        frequency: 0,
        cost: 0,
        offset: 0,
        intervals: "",
        species: "",
        mandatory: false,
      });
      toast.success("Vaccine created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create vaccine");
    }
  };

  const ModelData = [
    { value: "true", label: "YES" },
    { value: "false", label: "NO" },
  ];

  const useImgref = useRef(null);
  console.log("formData", formData);
  return (
    <div className="">
      <ToastContainer />
      {/* top section design */}
      <div className="flex sm:gap-6 gap:6 items-center sm:mb-0 mb-4 px-4 pb-5 mt-5">
        <div className="sm:mr-0 mr-4 ">
          <h2 className="font-bold sm:text-lg text-sm uppercase text-bold_text_colour">
            {" "}
            Add Vaccines
          </h2>
        </div>
      </div>
      {/* top section design */}

      <div className="lg:grid lg:grid-cols-9">
        <div className="col-span-7">
          <div className=" mx-auto  px-12 lg:px-20">
            <form onSubmit={handleSubmit}>
              <div className="bg-primary_colour py-5">
                <h2 className="text-center text-xl text-white font-semibold">
                  ADD VACCINES
                </h2>
              </div>
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div className="-mx-3 md:flex mb-2 mt-4">
                  <div className="md:w-full px-3">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="application-link"
                    >
                      Name
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="application-link"
                      type="text"
                      placeholder="Name Of Vaccine"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="uppercase  text-black text-xs font-bold mb-2"
                      htmlFor="company"
                    >
                      Frequency
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="company"
                      type="text"
                      placeholder="Frequency"
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-1/2 px-3">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Cost
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="title"
                      type="text"
                      placeholder="Cost"
                      name="cost"
                      value={formData.cost}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="uppercase  text-black text-xs font-bold mb-2"
                      htmlFor="company"
                    >
                      Offset
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="company"
                      type="text"
                      placeholder="Offset"
                      name="offset"
                      value={formData.offset}
                      onChange={handleChange}
                    />
                    {/*  <div>
                      <span className="text-red-500 text-xs italic">
                        Please fill out this field.
                      </span>
                    </div> */}
                  </div>
                  <div className="md:w-1/2 px-3">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Intervals
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="title"
                      type="text"
                      placeholder="Intervals"
                      name="intervals"
                      value={formData.intervals}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="uppercase  text-black text-xs font-bold mb-2"
                      htmlFor="company"
                    >
                      Species
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="company"
                      type="text"
                      placeholder="Species"
                      name="species"
                      value={formData.species}
                      onChange={handleChange}
                    />
                    {/*   <div>
                      <span className="text-red-500 text-xs italic">
                        Please fill out this field.
                      </span>
                    </div> */}
                  </div>
                  <div className="md:w-1/2 px-3">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Select Mandatory
                    </label>
                    <div className="-mx-3 md:flex mb-2">
                      <div className="md:w-full px-3 mb-6 md:mb-0">
                        <div>
                          <Select
                            name="car_brand"
                            className=" border-gray-400"
                            styles={customStyles}
                            options={ModelData}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="bg-custom_button_color w-full text-black uppercase font-semibold relative h-[50px] border px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:w-full before:h-0 before:bg-primary_colour before:transition-all before:duration-700 hover:text-white  hover:before:top-0 hover:before:h-full"
                  >
                    <span className="relative z-10">Continue</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVaccineComponent;
