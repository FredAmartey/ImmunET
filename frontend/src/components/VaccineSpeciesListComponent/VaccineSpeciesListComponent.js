import { useEffect, useState } from "react";

const VaccineSpeciesListComponent = () => {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [dataType, setDataType] = useState("doctor"); // State to track which data type to display
  const [loading, setLoading] = useState(false);
  // Function to fetch data based on the selected data type
  const fetchData = async () => {
    setLoading(true);
    try {
      let url = "";
      if (dataType === "doctor") {
        url = "https://immunet.azurewebsites.net/doctors?2?species=canine/vaccines"; //doctor
      } else {
        url = "https://immunet.azurewebsites.net/doctors/1/vaccines?species=CANINE"; //vaccine
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle button click and switch between doctor and species data
  const handleDataTypeChange = (type) => {
    setDataType(type);
  };

  // Fetch initial data on component mount
  useEffect(() => {
    let isApiSubscribed = true;
    fetchData();
    return () => {
      isApiSubscribed = false;
    };
  }, [dataType]);

  // JSX for rendering doctor table
  const renderLoader = () => <div>Loading...</div>;

  const renderTable = () => (
    <div className="align-middle inline-block w-full shadow sm:rounded-lg border-b border-gray-200">
      {/* Table structure */}
    </div>
  );
  const renderVaccineTable = () => (
    <div className="align-middle inline-block w-full shadow sm:rounded-lg border-b border-gray-200">
      <table className="min-w-full">
        {/* Table headers */}
        <thead>
          <tr className="bg-primary_colour tracking-wider text-base text-gray-900">
            <th className="px-6 py-5 text-left" colSpan="8">
              <input
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                type="checkbox"
              />
            </th>
            <th className="px-6 py-5 text-left">
              <h2 className="text-center text-white uppercase">Doctor</h2>
            </th>
          </tr>
          <tr className="bg-indigo-600 bg-opacity-20 border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wider">
            <th className="px-6 py-3 text-left font-medium">
              <input
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                type="checkbox"
              />
            </th>
            <th className="px-6 py-3 text-left font-medium">Name</th>
            <th className="px-6 py-3 text-left font-medium">UserName</th>

            <th className="px-6 py-3 text-left font-medium">Service Cost</th>
            <th className="px-6 py-3 text-left font-medium">Clinic Address</th>
            <th className="px-6 py-3 text-left font-medium">Address</th>
            <th className="px-6 py-3 text-left font-medium">Billing Address</th>
            <th className="px-6 py-3 text-left font-medium">Status</th>
            <th className="px-6 py-3 text-left font-medium"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {/* Table rows */}
          {data.map((doctor) => (
            <tr key={doctor.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <input
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  type="checkbox"
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{doctor.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{doctor.username}</div>
              </td>

              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{doctor.serviceCost}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{doctor.clinicAddress}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{doctor.address}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{doctor.billingAddress}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                ></a>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // JSX for rendering species table
  const renderSpeciesTable = () => (
    <div className="align-middle inline-block w-full shadow sm:rounded-lg border-b border-gray-200">
      <table className="min-w-full">
        {/* Table headers */}
        <thead>
          <tr className="bg-primary_colour tracking-wider text-base text-gray-900">
            <th className="px-6 py-5 text-left" colSpan="6">
              <input
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                type="checkbox"
              />
            </th>
            <th className="px-6 py-5 text-left">
              <h2 className="text-center text-white uppercase">Vaccine</h2>
            </th>
          </tr>
          <tr className="bg-indigo-600 bg-opacity-20 border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wider">
            <th className="px-6 py-3 text-left font-medium">
              <input
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                type="checkbox"
              />
            </th>
            <th className="px-6 py-3 text-left font-medium">ID</th>
            <th className="px-6 py-3 text-left font-medium">Name</th>
            <th className="px-6 py-3 text-left font-medium">Offset</th>
            <th className="px-6 py-3 text-left font-medium">Frequency</th>
            <th className="px-6 py-3 text-left font-medium">Species</th>
            <th className="px-6 py-3 text-left font-medium">Mandatory</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {/* Table rows */}
          {data.map((species) => (
            <tr key={species.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <input
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  type="checkbox"
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{species.id}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{species.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{species.offset}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{species.frequency}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{species.species}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">
                  {species.is_default === true ? <p>True</p> : <p>False</p>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 overflow-x-auto">
          {loading && renderLoader()}
        </div>
      </table>
    </div>
  );

  return (
    <div className="p-4 w-full border ">
      <div className="flex sm:gap-6 gap:6 items-center sm:mb-0 mb-4">
        <div className="sm:mr-0 mr-4 ">
          <h2 className="font-bold sm:text-lg text-sm uppercase text-bold_text_colour">
            {" "}
            stock doctor & species
          </h2>
        </div>
      </div>

      {/*   table design */}
      <div className="w-full h-screen">
        <div className="sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
              <div className="flex items-center py-2"></div>
              <div className="flex items-center py-2">
                <button
                  onClick={() => handleDataTypeChange("doctor")}
                  className={`inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium  text-white ${
                    dataType === "doctor" ? "bg-custom_button_color" : "bg-primary_background"
                  } focus:outline-none focus:shadow-outline`}
                >
                  Doctor
                </button>
                <button
                  onClick={() => handleDataTypeChange("species")}
                  className={`inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium  text-white ${
                    dataType === "species" ? "bg-custom_button_color" : "bg-primary_background"
                  } focus:outline-none focus:shadow-outline`}
                >
                  Vaccine
                </button>
              </div>
            </div>
            <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 overflow-x-auto">
              {/* Render doctor or species table based on data type */}
              {dataType === "doctor" ? renderVaccineTable() : renderSpeciesTable()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccineSpeciesListComponent;