// import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ProductAutomation from "./automation/ProductConfiguration";
import StandardisationAutomation from "./automation/StandardisationAutomation";
import WorkflowEnforcement from "./automation/WorkflowEnforcement";
import DrawingAutomation from "./automation/DrawingAutomation";
import Head from 'next/head';
import Tabs from "@/components/tab";
const AutomationSample = () => {
  return (
    <>
      <div className="h-full w-full items-center bg-white">
        <div
          className="w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        ></div>
        <Tabs />
      </div>
    </>
  );
}

export default AutomationSample;


// bg-gradient-to-br from-purple-200 to-indigo-400


// import { Tabs } from "flowbite-react";
// import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";

// const AutomationSample = () => {
//   return (
//     <Tabs aria-label="Default tabs" style="default" className="bg-white justify-center">
//       <Tabs.Item active title="Profile" icon={HiUserCircle} className="p-6">
//         This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
//         Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
//         control the content visibility and styling.
//       </Tabs.Item>
//       <Tabs.Item title="Dashboard" icon={MdDashboard}>
//         This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
//         Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
//         control the content visibility and styling.
//       </Tabs.Item>
//       <Tabs.Item title="Settings" icon={HiAdjustments}>
//         This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
//         Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
//         control the content visibility and styling.
//       </Tabs.Item>
//       <Tabs.Item title="Contacts" icon={HiClipboardList}>
//         This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
//         Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
//         control the content visibility and styling.
//       </Tabs.Item>
//       <Tabs.Item disabled title="Disabled">
//         Disabled content
//       </Tabs.Item>
//     </Tabs>
//   );
// }

// export default AutomationSample












// import React from "react";

// const Automation = () => {
//   const sections = [
//     {
//       title: "Product Configuration",
//       description:
//         "Product Configuration involves setting up customizable templates and automation processes within Autodesk tools to quickly and accurately configure products based on specific client needs. This service streamlines the design process, reduces lead times, and ensures precision in every configuration.",
//       images: [
//         "https://minutes.co/wp-content/uploads/2019/11/shutterstock_749427565.png",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7toYjmw3Aj_W2Ti8FlsQkPYtA0BIne9oKg&s",
//       ],
//     },
//     {
//       title: "Standardization Automation",
//       description:
//         "Standardization automation helps ensure consistency and compliance across your projects. We use advanced tools to automate standardization processes, making your work more efficient and reliable.",
//       images: [
//         "https://minutes.co/wp-content/uploads/2019/11/shutterstock_749427565.png",
//       ],
//     },
//     {
//       title: "Workflow Enforcement",
//       description:
//         "Workflow Enforcement involves setting up automated processes and controls within Autodesk tools to ensure that all tasks follow predefined sequences and standards. This service helps streamline operations, maintain quality, and enhance overall project efficiency.",
//       images: [
//         "https://static.vecteezy.com/system/resources/previews/011/430/963/original/analyst-working-at-laptop-with-automation-process-business-process-automation-business-process-workflow-automated-business-system-concept-vector.jpg",
//       ],
//     },
//     {
//       title: "Drawing Automation",
//       description:
//         "Drawing Automation involves using advanced features within Autodesk tools to automatically generate drawings from 3D models and BIM data. This service eliminates the need for repetitive manual work, reduces errors, and speeds up the design process.",
//       images: [
//         "https://media.licdn.com/dms/image/C5612AQGHeBwuntC4qQ/article-cover_image-shrink_720_1280/0/1645776773976?e=2147483647&v=beta&t=j6Z7uxrviNWILHY1bRHj85mVyBE3TXhyTii-PbI_7Ps",
//       ],
//     },
//   ];

//   return (
//     <div className="bg-white w-screen h-screen">
//       {/* <div className="flex text-black bg-neutral-400 font-bold text-4xl text-center justify-center p-5">AUTOMATION</div> */}
//       <div className="flex flex-row flex-wrap justify-center">
//         {sections.map((section, index) => (
//           <div
//             key={index}
//             className="card bg-cover bg-center m-4 bg-zinc-400"
//           >
//             <div className="card-content bg-gradient-to-b from-transparent to-black p-6">
//               <h2 className="card-title text-white relative mb-4">
//                 {section.title}
//               </h2>
//               <p className="card-body text-white/85 mb-6">
//                 {section.description}
//               </p>
//               <a
//                 href="#"
//                 className="button bg-green-500 text-black py-2 px-5 rounded hover:bg-white"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* ================================================= Why Choose Our Product Configuration Services ============================================================= */}

//       <div className="text-3xl font-bold text-white bg-stone-400 p-20 absolute start-14">Why Our Product</div>
//         <div className="flex flex-row justify-between bg-slate-50ewq1 px-72 py-12">
//           {[
//             {
//               title: "Customization",
//               description: "Easily create customized product configurations that meet the unique requirements of each project or client.",
//               image: "https://images.pexels.com/photos/3467147/pexels-photo-3467147.jpeg?auto=compress&cs=tinysrgb&w=600",
//               margin: "mt-24"
//             },
//             {
//               title: "Efficiency",
//               description: "Speed up the design process with automated configuration tools, reducing lead times and increasing productivity.",
//               image: "https://images.pexels.com/photos/8360289/pexels-photo-8360289.png?auto=compress&cs=tinysrgb&w=600",
//               margin: "mt-6"
//             },
//             {
//               title: "Accuracy",
//               description: "Ensure precise and error-free configurations with automated checks and validations.",
//               image: "https://images.pexels.com/photos/5986446/pexels-photo-5986446.jpeg?auto=compress&cs=tinysrgb&w=600",
//               margin: "mt-32"
//             },
//             {
//               title: "Flexibility",
//               description: "Adapt quickly to changing client demands and project requirements with flexible configuration options.",
//               image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600",
//               margin: "mt-9"
//             },
//           ].map((item, index) => (
//             <div key={index} className="flex mt- flex-col items-center bg-slate-50 relative w-1/4 h-screen">
//               <div className="px-2 p-9 relative">
//                 {index % 2 === 0 ? (
//                   <>
//                     <div className={`flex-grow bg-gray-800 rounded-md py-16 px-9 border border-neutral-700 shadow-md ${item.margin}`}>
//                       <div className="font-bold text-neutral-100 text-2xl mb-2">{item.title}</div>
//                       <div className="mb-4 text-gray-400">{item.description}</div>
//                       <div className="h-5 w-5 bg-black"></div>
//                     </div>
//                     <div className="bg-cover h-72 w-full bg-center mt-7 rounded-md" style={{ backgroundImage: `url(${item.image})` }}></div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="bg-cover h-72 w-full bg-center mt-7 rounded-md" style={{ backgroundImage: `url(${item.image})` }}></div>
//                     <div className={`flex-grow bg-gray-800 rounded-md py-16 px-9 border border-neutral-700 shadow-md ${item.margin}`}>
//                       <div className="font-bold text-neutral-100 text-2xl mb-2">{item.title}</div>
//                       <div className="mb-4 text-gray-400">{item.description}</div>
//                       <div className="h-5 w-5 bg-black"></div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//       {/* =============================================== How We Implement Product Configuration ================================================================= */}

//           <div className="bg-white">
//             <div>How We Implement Product Configuration</div>
//             <div>
              
//             </div>
//           </div>
//       {/* ================================================================================================================ */}


//     </div>
//   );
// };

// export default Automation;





// // import React from "react";

// // const Automation = () => {
// //   const sections = [
// //     {
// //       title: "Product Configuration",
// //       description:
// //         "Product Configuration involves setting up customizable templates and automation processes within Autodesk tools to quickly and accurately configure products based on specific client needs. This service streamlines the design process, reduces lead times, and ensures precision in every configuration.",
// //       images: [
// //         "https://minutes.co/wp-content/uploads/2019/11/shutterstock_749427565.png",
// //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7toYjmw3Aj_W2Ti8FlsQkPYtA0BIne9oKg&s",
// //       ],
// //     },
// //     {
// //       title: "Standardization Automation",
// //       description:
// //         "Standardization automation helps ensure consistency and compliance across your projects. We use advanced tools to automate standardization processes, making your work more efficient and reliable.",
// //       images: [
// //         "https://minutes.co/wp-content/uploads/2019/11/shutterstock_749427565.png",
// //       ],
// //     },
// //     {
// //       title: "Workflow Enforcement",
// //       description:
// //         "Workflow Enforcement involves setting up automated processes and controls within Autodesk tools to ensure that all tasks follow predefined sequences and standards. This service helps streamline operations, maintain quality, and enhance overall project efficiency.",
// //       images: [
// //         "https://static.vecteezy.com/system/resources/previews/011/430/963/original/analyst-working-at-laptop-with-automation-process-business-process-automation-business-process-workflow-automated-business-system-concept-vector.jpg",
// //       ],
// //     },
// //     {
// //       title: "Drawing Automation",
// //       description:
// //         "Drawing Automation involves using advanced features within Autodesk tools to automatically generate drawings from 3D models and BIM data. This service eliminates the need for repetitive manual work, reduces errors, and speeds up the design process.",
// //       images: [
// //         "https://media.licdn.com/dms/image/C5612AQGHeBwuntC4qQ/article-cover_image-shrink_720_1280/0/1645776773976?e=2147483647&v=beta&t=j6Z7uxrviNWILHY1bRHj85mVyBE3TXhyTii-PbI_7Ps",
// //       ],
// //     },
// //   ];

// //   return (
// //     <div className="bg-white w-screen h-screen">
// //       {/* <div className="flex text-black bg-neutral-400 font-bold text-4xl text-center justify-center p-5">AUTOMATION</div> */}
// //       <div className="flex flex-row flex-wrap justify-center">
// //         {sections.map((section, index) => (
// //           <div
// //             key={index}
// //             className="card bg-cover bg-center m-4 bg-zinc-400"
// //           >
// //             <div className="card-content bg-gradient-to-b from-transparent to-black p-6">
// //               <h2 className="card-title text-white relative mb-4">
// //                 {section.title}
// //               </h2>
// //               <p className="card-body text-white/85 mb-6">
// //                 {section.description}
// //               </p>
// //               <a
// //                 href="#"
// //                 className="button bg-green-500 text-black py-2 px-5 rounded hover:bg-white"
// //               >
// //                 Learn More
// //               </a>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       {/* ================================================= Why Choose Our Product Configuration Services ============================================================= */}

// //       <div className="text-3xl font-bold text-white bg-stone-400 p-20 absolute start-14">Why Our Product</div>
// //         <div className="flex flex-row justify-between bg-gray-900 px-72 py-12">
// //           {[
// //             {
// //               title: "Customization",
// //               description: "Easily create customized product configurations that meet the unique requirements of each project or client.",
// //               image: "https://images.pexels.com/photos/3467147/pexels-photo-3467147.jpeg?auto=compress&cs=tinysrgb&w=600",
// //               margin: "mt-24"
// //             },
// //             {
// //               title: "Efficiency",
// //               description: "Speed up the design process with automated configuration tools, reducing lead times and increasing productivity.",
// //               image: "https://images.pexels.com/photos/8360289/pexels-photo-8360289.png?auto=compress&cs=tinysrgb&w=600",
// //               margin: "mt-6"
// //             },
// //             {
// //               title: "Accuracy",
// //               description: "Ensure precise and error-free configurations with automated checks and validations.",
// //               image: "https://images.pexels.com/photos/5986446/pexels-photo-5986446.jpeg?auto=compress&cs=tinysrgb&w=600",
// //               margin: "mt-32"
// //             },
// //             {
// //               title: "Flexibility",
// //               description: "Adapt quickly to changing client demands and project requirements with flexible configuration options.",
// //               image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600",
// //               margin: "mt-9"
// //             },
// //           ].map((item, index) => (
// //             <div key={index} className="flex mt- flex-col items-center bg-gray-900 relative w-1/4 h-screen">
// //               <div className="px-2 p-9 relative">
// //                 {index % 2 === 0 ? (
// //                   <>
// //                     <div className={`flex-grow bg-gray-800 rounded-md py-16 px-9 border border-neutral-700 shadow-md ${item.margin}`}>
// //                       <div className="font-bold text-neutral-100 text-2xl mb-2">{item.title}</div>
// //                       <div className="mb-4 text-gray-400">{item.description}</div>
// //                       <div className="h-5 w-5 bg-black"></div>
// //                     </div>
// //                     <div className="bg-cover h-72 w-full bg-center mt-7 rounded-md" style={{ backgroundImage: `url(${item.image})` }}></div>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <div className="bg-cover h-72 w-full bg-center mt-7 rounded-md" style={{ backgroundImage: `url(${item.image})` }}></div>
// //                     <div className={`flex-grow bg-gray-800 rounded-md py-16 px-9 border border-neutral-700 shadow-md ${item.margin}`}>
// //                       <div className="font-bold text-neutral-100 text-2xl mb-2">{item.title}</div>
// //                       <div className="mb-4 text-gray-400">{item.description}</div>
// //                       <div className="h-5 w-5 bg-black"></div>
// //                     </div>
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       {/* =============================================== How We Implement Product Configuration ================================================================= */}

// //           <div className="bg-white">
// //             <div>How We Implement Product Configuration</div>
// //             <div>
              
// //             </div>
// //           </div>
// //       {/* ================================================================================================================ */}


// //     </div>
// //   );
// // };

// // export default Automation;





// // {sections.map((section, index) => (
// //   <div key={index} className="bg-white">
// //     <div className="text-4xl font-bold text-slate-600 p-6">
// //       {section.title}
// //     </div>

// //     <div className="flex flex-row text-black pt-12 pl-12">
// //       <div className="flex justify-center items-center text-center p-36 bg-quaternary rounded-ss-2xl font-bold text-2xl">
// //         PICTURE
// //       </div>
// //       <div className="flex flex-col bg-stone-400 justify-center items-center text-center p-28 space-y-4">
// //         <div className="text-2xl font-bold">
// //           Optimize Your Design Process with Advanced Product Configuration
// //         </div>
// //         <div>{section.description}</div>
// //       </div>
// //     </div>

    
// //     <div className="flex flex-row text-black pl-12">
// //       <div className="flex justify-center items-center text-center p-36 bg-stone-400 rounded-bl-2xl font-bold text-2xl">
// //         PICTURE
// //       </div>
// //       <div className="flex flex-col bg-quaternary justify-center items-center text-center p-28 space-y-4">
// //         <div className="text-2xl font-bold">
// //           Optimize Your Design Process with Advanced Product Configuration
// //         </div>
// //         <div>{section.description}</div>
// //       </div>
// //     </div>
// //   </div>
// // ))}