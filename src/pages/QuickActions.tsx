import {
  irsContactInfo,
  refundOptions,
  taxOptions,
  taxRecordsOptions,
} from "../data";

const handleSelectChange = (
  event: React.ChangeEvent<HTMLSelectElement>,
  options: any[]
) => {
  const selectedValue = event.target.value;
  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  if (selectedOption?.link) {
    window.open(selectedOption.link, "_blank");
  }
};

const QuickActions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          Quick Actions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Refund & Tax Section */}
          <div className="bg-last p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Check Refund Status/Pay Tax Online
            </h3>
            <div className="space-y-6">
              {[
                { title: "Refund Status", options: refundOptions },
                { title: "Pay Tax Online", options: taxOptions },
                { title: "Get Your Tax Records", options: taxRecordsOptions },
              ].map(({ title, options }, index) => (
                <div
                  key={index}
                  className="flex gap-2 justify-between items-center"
                >
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <select
                    className="text-primary px-6 py-2 rounded-lg transition-colors"
                    onChange={(e) => handleSelectChange(e, options)}
                  >
                    <option value="">Select an option</option>
                    {options.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* IRS Contact Information */}
          <div className="bg-last p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">
              IRS Contact Information
            </h3>
            <table className="table-auto w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-primary">
                    Section
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-primary">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {irsContactInfo.map(({ section, details }, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 font-semibold text-primary">
                      {section}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-primary">
                      {details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
