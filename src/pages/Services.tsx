// import React from 'react';

// export default function Services() {
//   const allServices = [
//     { id: 1, name: "State Tax Return Filing", price: "59.99" },
//     { id: 2, name: "Local / City Tax Return", price: "29.99" },
//     { id: 3, name: "Schedule C", price: "79.99" },
//     { id: 4, name: "Schedule D (Charges apply for every additional page)", price: "29.99" },
//     { id: 5, name: "Schedule E: Each Additional Property Costs $19.99", price: "49.99" },
//     { id: 6, name: "Election Charges (Sec 6013'g' & 'h' election)", price: "79.99" },
//     { id: 7, name: "ITIN (W7 Form)", price: "75.99" },
//     { id: 8, name: "COA - Each Certificate of Accuracy for ITIN", price: "149.99" },
//     { id: 9, name: "FBAR", price: "29.99" },
//     { id: 10, name: "FATCA - 8938", price: "39.99" },
//     { id: 11, name: "State Itemized Deductions", price: "29.99" },
//     { id: 12, name: "Extension filing", price: "19.99" },
//     { id: 13, name: "Form 8949 (Crypto) per page", price: "9.99" },
//     { id: 14, name: "Form 1116", price: "24.99" },
//     { id: 15, name: "Form K1's", price: "44.99" },
//     { id: 16, name: "Sale of Property", price: "79.99" },
//     { id: 17, name: "Form 8843", price: "49.99" },
//     { id: 18, name: "Form 8621 PFIC (for each fund)", price: "99.99" },
//     { id: 19, name: "Indian Tax Return Filing", price: "44.99" },
//     { id: 20, name: "International tax forms ,5471,5472,8858,8865,8804,8805", price: "149.99" },
//     { id: 21, name: "Business Forms-1120,1120-S,1065,990(Starts from $250)", price: "249.99" },
//     { id: 22, name: "Accounting and Bookkeeping services(Starts from $149.99)", price: "149.99" },
//     { id: 23, name: "Federal Tax Return Filing (Form 1040)", price: "69.99" }
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen pt-16">
//       <div className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold text-center mb-12">Our Services & Pricing</h1>
        
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Serial No
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Service Type
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Price ($)
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {allServices.map((service, index) => (
//                   <tr key={service.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {service.id}
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-900">
//                       {service.name}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       {service.price}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                         Select
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








export default function Services() {
  const allServices = [
    { id: 1, name: "State Tax Return Filing", price: "59.99" },
    { id: 2, name: "Local / City Tax Return", price: "29.99" },
    { id: 3, name: "Schedule C", price: "79.99" },
    { id: 4, name: "Schedule D (Charges apply for every additional page)", price: "29.99" },
    { id: 5, name: "Schedule E: Each Additional Property Costs $19.99", price: "49.99" },
    { id: 6, name: "Election Charges (Sec 6013'g' & 'h' election)", price: "79.99" },
    { id: 7, name: "ITIN (W7 Form)", price: "75.99" },
    { id: 8, name: "COA - Each Certificate of Accuracy for ITIN", price: "149.99" },
    { id: 9, name: "FBAR", price: "29.99" },
    { id: 10, name: "FATCA - 8938", price: "39.99" },
    { id: 11, name: "State Itemized Deductions", price: "29.99" },
    { id: 12, name: "Extension filing", price: "19.99" },
    { id: 13, name: "Form 8949 (Crypto) per page", price: "9.99" },
    { id: 14, name: "Form 1116", price: "24.99" },
    { id: 15, name: "Form K1's", price: "44.99" },
    { id: 16, name: "Sale of Property", price: "79.99" },
    { id: 17, name: "Form 8843", price: "49.99" },
    { id: 18, name: "Form 8621 PFIC (for each fund)", price: "99.99" },
    { id: 19, name: "Indian Tax Return Filing", price: "44.99" },
    { id: 20, name: "International tax forms ,5471,5472,8858,8865,8804,8805", price: "149.99" },
    { id: 21, name: "Business Forms-1120,1120-S,1065,990(Starts from $250)", price: "249.99" },
    { id: 22, name: "Accounting and Bookkeeping services(Starts from $149.99)", price: "149.99" },
    { id: 23, name: "Federal Tax Return Filing (Form 1040)", price: "69.99" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Services & Pricing</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-10">
          <div className="overflow-x-auto flex justify-center">
            <table className="min-w-[80%]  divide-y divide-last">
              <thead className="bg-background">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                    Serial No
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                    Service Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                    Price ($)
                  </th>
                  {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody className="bg-last divide-y divide-gray-200">
                {allServices.map((service, index) => (
                  <tr key={service.id} className={index % 2 === 0 ? 'bg-gray-150' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {service.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {service.price}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Select
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
