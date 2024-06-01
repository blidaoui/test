// "use client"
// import React, { Fragment, useEffect, useState } from "react";
// import Image from "next/image";
// import moto from "../../../public/image/moto.png";
// import panierrepas from "../../../public/image/panierrepas.png";
// import { Dialog, Transition } from "@headlessui/react";
// import "./Modal.css";
// import Cartes from "../Navbar/MonCompte/Profile/Cartes";

// const ModalCategorie = ({ setShowModal }: any) => {
//     const [chosenOption, setChosenOption] = useState("");
//     const [selectedTime, setSelectedTime] = useState("");
//     const [deliveryAddress, setDeliveryAddress] = useState("");
//     const [paymentOption, setPaymentOption] = useState("");

//     const handleClose = () => {
//         setShowModal(false);

//     };
//         const userId = localStorage.getItem("userId");

//     const handleValidateClick = async ({  etat }: any) => {
//                 if(userId===null){
//                      handleClose()
//                     // setIsSignInOpen(true)
//                 }
//                 else{ const Panier = panierSnapshot.Panier;
//                     let DataCartItem: any = [];
//                     let TPrix: any = 0;
//                     for (let item of Panier) {
//                       TPrix += item.prix;
//                       DataCartItem.push({ ...item });
//                     }

//                     let body = {
//                       cartItem: { ...DataCartItem },
//                       id_user: Number(userId),
//                       etat: etat,
//                       prix: TPrix,
//                       ModeRetrait: {
//                         Mode: chosenOption,
//                         time: selectedTime,
//                       },
//                       address: deliveryAddress,
//                     };
//                     let response = await fetch(
//                       "http://localhost:8000/backend/panier/AddPanier",
//                       {
//                         method: "POST",
//                         headers: { "Content-Type": "application/json" },
//                         body: JSON.stringify(body),
//                       }
//                     );

//                     if (selectedTime === "") {
//                       alert("insert time");
//                     } else if (chosenOption === "emporter") {
//                     //   router.push("/components//Navbar/MonCompte/Commande");
//                     } else if (chosenOption === "livraison" && deliveryAddress === "") {
//                       alert("insert address");
//                     } else {
//                     //   router.push("/components/Navbar/MonCompte/Commande");
//                     }
//                     handleClose()}

//               };

//     const handleOptionClick = (option: any) => {
//         setChosenOption(option);
//     };

//     const handleTimeChange = (event: any) => {
//         setSelectedTime(event.target.value);
//     };

//     const handleAddressChange = (event: any) => {
//         setDeliveryAddress(event.target.value);
//     };

//     const handlePaymentOptionClick = (option: any) => {
//         if (option === "espece") {
//             // Redirect to the Commande page
//             // You might need to use a router here if you have one, like:
//             // router.push('/commande');
//             handleClose(); // For now, we'll just close the modal
//         } else {
//             setPaymentOption(option);
//         }
//     };

//     useEffect(() => {
//         setSelectedTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
//     }, []);

//     return (
//         <Transition appear show={true} as={Fragment}>
//             <Dialog as="div" className="relative z-10" onClose={handleClose}>
//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <div className="fixed inset-0 bg-black bg-opacity-25" />
//                 </Transition.Child>
//                 <div className="fixed inset-0 overflow-y-auto">
//                     <div className="flex min-h-full items-center justify-center p-4 text-center">
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
//                                 <div className="flex justify-between items-center border-b pb-3 mb-4">
//                                     <h5 className="text-xl font-bold text-gray-800">Modes de retrait</h5>
//                                     <button className="text-gray-500 hover:text-gray-800" onClick={handleClose}>
//                                         ✕
//                                     </button>
//                                 </div>
//                                 {paymentOption !== "carte" ? (
//                                     <>
//                                         <div className="grid grid-cols-2 gap-4 mb-4">
//                                             <div className="text-center">
//                                                 <button
//                                                     style={{
//                                                         backgroundColor: chosenOption === "emporter" ? "green" : "",
//                                                         borderRadius: "100%",
//                                                     }}
//                                                     onClick={() => handleOptionClick("emporter")}>
//                                                     <Image src={panierrepas} alt="Emporter" width={60} height={60} />
//                                                 </button>
//                                                 <p className="mt-2">A emporter</p>
//                                             </div>
//                                             <div className="text-center">
//                                                 <button
//                                                     style={{
//                                                         backgroundColor: chosenOption === "livraison" ? "green" : "",
//                                                         borderRadius: "100%",
//                                                     }}
//                                                     onClick={() => handleOptionClick("livraison")}>
//                                                     <Image src={moto} alt="Livraison" width={60} height={60} />
//                                                 </button>
//                                                 <p className="mt-2">Livraison</p>
//                                             </div>
//                                         </div>
//                                         <div className="text-center mb-4">
//                                             <p>Aujourd'hui</p>
//                                             <input type="time" className="mt-1 px-4 py-2 border rounded-lg" value={selectedTime} onChange={handleTimeChange} />
//                                         </div>
//                                         {chosenOption === "livraison" && (
//                                             <div className="mb-4">
//                                                 <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700">Adresse de livraison:</label>
//                                                 <input type="text" id="deliveryAddress" value={deliveryAddress} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleAddressChange} placeholder="Entrez votre adresse" />
//                                             </div>
//                                         )}
//                                         <div className="grid grid-cols-2 gap-4 mb-4">
//                                             <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2" onClick={() => handlePaymentOptionClick("espece")}>
//                                                 Espece
//                                             </button>
//                                             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" onClick={() => handlePaymentOptionClick("carte")}>
//                                                 Par Carte
//                                             </button>
//                                         </div>
//                                         <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" onClick={handleValidateClick}>
//                                             Valider
//                                         </button>
//                                     </>
//                                 ) : (
//                                     <Cartes />
//                                 )}
//                             </Dialog.Panel>
//                         </Transition.Child>
//                     </div>
//                 </div>
//             </Dialog>
//         </Transition>
//     );
// };

// export default ModalCategorie;

// import React, { Fragment, useEffect, useState } from "react";
// import Image from "next/image";
// import moto from "../../../public/image/moto.png";
// import panierrepas from "../../../public/image/panierrepas.png";
// import { Dialog, Transition } from "@headlessui/react";
// import "./Modal.css"
// import { useSnapshot } from "valtio";
// import store from "../store/store";
// import { useRouter } from "next/navigation";
// const ModalCategorie = ({ setShowModal,setIsSignInOpen }:any) => {

//     const panierSnapshot = useSnapshot(store);
//     const userId = localStorage.getItem("userId");
//     const { selectedCategorie } = useSnapshot(store);
//     console.log({ selectedCategorie });
//     const router = useRouter();
//     const Panier = panierSnapshot.Panier;

//     let totalQuantity :any =0
//     Panier.forEach(item => {
//         totalQuantity += item.qte;
//     });

//     let currentDate = new Date();
//     let timeInMinutes =15 * totalQuantity
//     let newDate = new Date(currentDate.getTime() + timeInMinutes * 60000);
//     let currentTime = newDate.toLocaleTimeString();

//     const [chosenOption, setChosenOption] = useState("");
//     const [selectedTime, setSelectedTime] = useState(currentTime);
//     const [deliveryAddress, setDeliveryAddress] = useState("");

//     const handleClose = () => {
//         setShowModal(false);

//     };

//     const handleOptionClick = (option:any) => {
//         setChosenOption(option);
//     };

//     const handleTimeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
//         if( currentTime <= event.target.value ){
//             setSelectedTime(event.target.value);
//         }

//     };

//     const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setDeliveryAddress(event.target.value);
//     };
//     const handleValidateClick = async ({  etat }: any) => {
//         if(currentTime <= selectedTime ){
//         if(userId===null){
//             handleClose()
//             setIsSignInOpen(true)
//         }
//         else{ const Panier = panierSnapshot.Panier;
//             let DataCartItem: any = [];
//             let TPrix: any = 0;
//             for (let item of Panier) {
//               TPrix += item.prix;
//               DataCartItem.push({ ...item });
//             }

//             let body = {
//               cartItem: { ...DataCartItem },
//               id_user: Number(userId),
//               etat: etat,
//               prix: TPrix,
//               ModeRetrait: {
//                 Mode: chosenOption,
//                 time: selectedTime,
//               },
//               address: deliveryAddress,
//             };
//             let response = await fetch(
//               "http://localhost:8000/backend/panier/AddPanier",
//               {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(body),
//               }
//             );

//             if (selectedTime === "") {
//               alert("insert time");
//             } else if (chosenOption === "emporter") {
//               router.push("/components//Navbar/MonCompte/Commande");
//             } else if (chosenOption === "livraison" && deliveryAddress === "") {
//               alert("insert address");
//             } else {
//               router.push("/components/Navbar/MonCompte/Commande");
//             }
//             handleClose()}
//         }

//       };

//     useEffect(() => {
//         const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
//         setSelectedTime(currentTime);
//     }, []);

//     return (
//         <Transition appear show={true} as={Fragment}>
//             <Dialog as="div" className="relative z-10" onClose={handleClose}>
//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <div className="fixed inset-0 bg-black bg-opacity-25" />
//                 </Transition.Child>
//                 <div className="fixed inset-0 overflow-y-auto">
//                     <div className="flex min-h-full items-center justify-center p-4 text-center">
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
//                                 <div className="flex justify-between items-center border-b pb-3 mb-4">
//                                     <h5 className="text-xl font-bold text-gray-800">Modes de retrait</h5>
//                                     <button className="text-gray-500 hover:text-gray-800" onClick={handleClose}>
//                                         ✕
//                                     </button>
//                                 </div>
//                                 <div className="grid grid-cols-2 gap-4 mb-4">
//                                     <div className="text-center">
//                                         <button
//                                           style={{
//                                             backgroundColor: chosenOption === "emporter" ? "green" : "",
//                                             borderRadius: "100%",
//                                           }}
//                                          onClick={() => handleOptionClick("emporter")}>
//                                             <Image src={panierrepas} alt="Emporter" width={60} height={60} />
//                                         </button>
//                                         <p className="mt-2">A emporter</p>
//                                     </div>
//                                     <div className="text-center">
//                                         <button
//                                          style={{
//                                           backgroundColor: chosenOption === "livraison" ? "green" : "",
//                                           borderRadius: "100%",
//                                         }}
//                                          onClick={() => handleOptionClick("livraison")}>
//                                             <Image src={moto} alt="Livraison" width={60} height={60} />
//                                         </button>
//                                         <p className="mt-2">Livraison</p>
//                                     </div>
//                                 </div>
//                                 <div className="text-center mb-4">

//                                     <input
//                                       type="time"
//                                       id="appt"
//                                       name="appt"
//                                       className="mt-1 px-4 py-2 border rounded-lg"
//                                       value={selectedTime}
//                                       onChange={handleTimeChange}
//                                        />

//                                     <p className="text-red-500"> Minimum time is  {currentTime }</p>
//                                 </div>
//                                 {chosenOption === "livraison" && (
//                                     <div className="mb-4">
//                                         <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700">Adresse de livraison:</label>
//                                         <input type="text" id="deliveryAddress" value={deliveryAddress} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleAddressChange} placeholder="Entrez votre adresse" />
//                                     </div>
//                                 )}
//                                 <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" onClick={()=>handleValidateClick(chosenOption)}>
//                                     Valider
//                                 </button>
//                             </Dialog.Panel>
//                         </Transition.Child>
//                     </div>
//                 </div>
//             </Dialog>
//         </Transition>
//     );
// };

// export default ModalCategorie;

// "use client"
// import React, { Fragment, useEffect, useState } from "react";
// import Image from "next/image";
// import moto from "../../../public/image/moto.png";
// import panierrepas from "../../../public/image/panierrepas.png";
// import { Dialog, Transition } from "@headlessui/react";
// import "./Modal.css";
// import { useSnapshot } from "valtio";
// import store from "../store/store";
// import { useRouter } from "next/navigation";

// const ModalCategorie = ({ setShowModal, setIsSignInOpen }:any) => {
//   const panierSnapshot = useSnapshot(store);
//   const userId = localStorage.getItem("userId");
//   const { selectedCategorie } = useSnapshot(store);
//   const router = useRouter();
//   const Panier = panierSnapshot.Panier;

//   let totalQuantity = 0;
//   Panier.forEach((item) => {
//     totalQuantity += item.qte;
//   });

//   let currentDate = new Date();
//   let timeInMinutes = 15 * totalQuantity;
//   let newDate = new Date(currentDate.getTime() + timeInMinutes * 60000);
//   let currentTime = newDate.toLocaleTimeString();

//   const [chosenOption, setChosenOption] = useState("");
//   const [selectedTime, setSelectedTime] = useState(currentTime);
//   const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [showPaymentOptions, setShowPaymentOptions] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("");

//   const handleClose = () => {
//     setShowModal(false);
//   };

//   const handleOptionClick = (option:any) => {
//     setChosenOption(option);
//   };

//   const handleTimeChange = (event:any) => {
//     if (currentTime <= event.target.value) {
//       setSelectedTime(event.target.value);
//     }
//   };

//   const handleAddressChange = (event:any) => {
//     setDeliveryAddress(event.target.value);
//   };

//   const handleValidateClick = async () => {
//     if (currentTime <= selectedTime) {
//       if (userId === null) {
//         setShowPaymentOptions(true);

//         // handleClose();
//         // setIsSignInOpen(true);
//       } else {
//         setShowPaymentOptions(true);
//       }
//     }
//   };

//   const handlePaymentClick = async (paymentMethod:any) => {
//     const Panier = panierSnapshot.Panier;
//     let DataCartItem = [];
//     let TPrix = 0;
//     for (let item of Panier) {
//      // TPrix += item.prix;
//       DataCartItem.push({ ...item });
//     }

//     let body = {
//       cartItem: { ...DataCartItem },
//       id_user: Number(userId),
//       etat: "en attente",
//       prix: TPrix,
//       ModeRetrait: {
//         Mode: chosenOption,
//         time: selectedTime,
//       },
//       paymentMethod: paymentMethod,
//       address: deliveryAddress,
//     };

//     let response = await fetch("http://localhost:8000/backend/panier/AddPanier", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     });

//     if (selectedTime === "") {
//       alert("insert time");
//     } else if (chosenOption === "emporter") {
//       router.push("/components/Navbar/MonCompte/Commande");
//     } else if (chosenOption === "livraison" && deliveryAddress === "") {
//       alert("insert address");
//     } else {
//     //   router.push("/components/Navbar/MonCompte/Commande");
//     }
//     handleClose();
//   };

//   useEffect(() => {
//     const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false });
//     setSelectedTime(currentTime);
//   }, []);

//   return (
//     <Transition appear show={true} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={handleClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black bg-opacity-25" />
//         </Transition.Child>
//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
//                 <div className="flex justify-between items-center border-b pb-3 mb-4">
//                   <h5 className="text-xl font-bold text-gray-800">Modes de retrait</h5>
//                   <button className="text-gray-500 hover:text-gray-800" onClick={handleClose}>
//                     ✕
//                   </button>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div className="text-center">
//                     <button
//                       style={{
//                         backgroundColor: chosenOption === "emporter" ? "green" : "",
//                         borderRadius: "100%",
//                       }}
//                       onClick={() => handleOptionClick("emporter")}
//                     >
//                       <Image src={panierrepas} alt="Emporter" width={60} height={60} />
//                     </button>
//                     <p className="mt-2">A emporter</p>
//                   </div>
//                   <div className="text-center">
//                     <button
//                       style={{
//                         backgroundColor: chosenOption === "livraison" ? "green" : "",
//                         borderRadius: "100%",
//                       }}
//                       onClick={() => handleOptionClick("livraison")}
//                     >
//                       <Image src={moto} alt="Livraison" width={60} height={60} />
//                     </button>
//                     <p className="mt-2">Livraison</p>
//                   </div>
//                 </div>
//                 <div className="text-center mb-4">
//                   <input
//                     type="time"
//                     id="appt"
//                     name="appt"
//                     className="mt-1 px-4 py-2 border rounded-lg"
//                     value={selectedTime}
//                     onChange={handleTimeChange}
//                   />
//                   <p className="text-red-500">Minimum time is {currentTime}</p>
//                 </div>
//                 {chosenOption === "livraison" && (
//                   <div className="mb-4">
//                     <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700">
//                       Adresse de livraison:
//                     </label>
//                     <input
//                       type="text"
//                       id="deliveryAddress"
//                       value={deliveryAddress}
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                       onChange={handleAddressChange}
//                       placeholder="Entrez votre adresse"
//                     />
//                   </div>
//                 )}
//                 {showPaymentOptions && (
//                   <div className="mb-4 text-center">
//                     <h5 className="text-xl font-bold text-gray-800 mb-4">Modes de paiement</h5>
//                     <button
//                       className="w-full mb-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
//                       onClick={() => handlePaymentClick("carte")}
//                     >
//                       Paiement avec carte
//                     </button>
//                     <button
//                       className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
//                       onClick={() => handlePaymentClick("espace")}
//                     >
//                       Paiement avec espace
//                     </button>
//                   </div>
//                 )}
//                 {!showPaymentOptions && (
//                   <button
//                     className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
//                     onClick={handleValidateClick}
//                   >
//                     Valider
//                   </button>
//                 )}
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// export default ModalCategorie;

// "use client"
// import React, { Fragment, useEffect, useState } from "react";
// import Image from "next/image";
// import moto from "../../../public/image/moto.png";
// import panierrepas from "../../../public/image/panierrepas.png";
// import { Dialog, Transition } from "@headlessui/react";
// import "./Modal.css";
// import Cartes from "../Navbar/MonCompte/Profile/Cartes";

// const ModalCategorie = ({ setShowModal }: any) => {
//     const [chosenOption, setChosenOption] = useState("");
//     const [selectedTime, setSelectedTime] = useState("");
//     const [deliveryAddress, setDeliveryAddress] = useState("");
//     const [paymentOption, setPaymentOption] = useState("");

//     const handleClose = () => {
//         setShowModal(false);

//     };
//         const userId = localStorage.getItem("userId");

//     const handleValidateClick = (option: any) => {
//   if (selectedTime === "") {
//     alert("insert time");
//   } else if (chosenOption === "") {
//     alert("choose sale mode");
//   } else if (chosenOption === "emporter") {
//     setPaymentOption(option);
//   }else if (chosenOption === "livraison") {
//     setPaymentOption(option);
//   }

//  };

//     const handleOptionClick = (option: any) => {
//         setChosenOption(option);
//     };

//     const handleTimeChange = (event: any) => {
//         setSelectedTime(event.target.value);
//     };

//     const handleAddressChange = (event: any) => {
//         setDeliveryAddress(event.target.value);
//     };

//     const handlePaymentOptionClick = (option: any) => {
//         if (option === "espece") {
//             // Redirect to the Commande page
//             // You might need to use a router here if you have one, like:
//             // router.push('/commande');
//             handleClose(); // For now, we'll just close the modal
//         } else {
//             setPaymentOption(option);
//         }
//     };

//     useEffect(() => {
//         setSelectedTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
//     }, []);

//     return (
//         <Transition appear show={true} as={Fragment}>
//             <Dialog as="div" className="relative z-10" onClose={handleClose}>
//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <div className="fixed inset-0 bg-black bg-opacity-25" />
//                 </Transition.Child>
//                 <div className="fixed inset-0 overflow-y-auto">
//                     <div className="flex min-h-full items-center justify-center p-4 text-center">
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
//                                 <div className="flex justify-between items-center border-b pb-3 mb-4">
//                                     <h5 className="text-xl font-bold text-gray-800">Modes de retrait</h5>
//                                     <button className="text-gray-500 hover:text-gray-800" onClick={handleClose}>
//                                         ✕
//                                     </button>
//                                 </div>
//                                 {paymentOption !== "paye" ? (
//                                     <>
//                                         <div className="grid grid-cols-2 gap-4 mb-4">
//                                             <div className="text-center">
//                                                 <button
//                                                     style={{
//                                                         backgroundColor: chosenOption === "emporter" ? "green" : "",
//                                                         borderRadius: "100%",
//                                                     }}
//                                                     onClick={() => handleOptionClick("emporter")}>
//                                                     <Image src={panierrepas} alt="Emporter" width={60} height={60} />
//                                                 </button>
//                                                 <p className="mt-2">A emporter</p>
//                                             </div>
//                                             <div className="text-center">
//                                                 <button
//                                                     style={{
//                                                         backgroundColor: chosenOption === "livraison" ? "green" : "",
//                                                         borderRadius: "100%",
//                                                     }}
//                                                     onClick={() => handleOptionClick("livraison")}>
//                                                     <Image src={moto} alt="Livraison" width={60} height={60} />
//                                                 </button>
//                                                 <p className="mt-2">Livraison</p>
//                                             </div>
//                                         </div>
//                                         <div className="text-center mb-4">
//                                             <p>Aujourd'hui</p>
//                                             <input type="time" className="mt-1 px-4 py-2 border rounded-lg" value={selectedTime} onChange={handleTimeChange} />
//                                         </div>
//                                         {chosenOption === "livraison" && (
//                                             <div className="mb-4">
//                                                 <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700">Adresse de livraison:</label>
//                                                 <input type="text" id="deliveryAddress" value={deliveryAddress} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleAddressChange} placeholder="Entrez votre adresse" />
//                                             </div>
//                                         )}

//                                         <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" onClick={() => handleValidateClick("paye")}>
//                                             Valider
//                                         </button>
//                                     </>
//                                 ) : (
//                                       <div className="grid grid-cols-2 gap-4 mb-4">
//                                             <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2" onClick={() => handlePaymentOptionClick("espece")}>
//                                                 Espece
//                                             </button>
//                                             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" onClick={() => handleValidateClick("carte")}>
//                                                 Par Carte
//                                             </button>
//                                         </div>
//                                 )}
//                             </Dialog.Panel>
//                         </Transition.Child>
//                     </div>
//                 </div>
//             </Dialog>
//         </Transition>
//     );
// };

// export default ModalCategorie;

// import React, { Fragment, useEffect, useState } from "react";
// import Image from "next/image";
// import moto from "../../../public/image/moto.png";
// import panierrepas from "../../../public/image/panierrepas.png";
// import { Dialog, Transition } from "@headlessui/react";
// import "./Modal.css"
// import { useSnapshot } from "valtio";
// import store from "../store/store";
// import { useRouter } from "next/navigation";
// const ModalCategorie = ({ setShowModal,setIsSignInOpen }:any) => {
//     const panierSnapshot = useSnapshot(store);
//     const userId = localStorage.getItem("userId");
//     const { selectedCategorie } = useSnapshot(store);
//     console.log({ selectedCategorie });
//     const router = useRouter();
//     const Panier = panierSnapshot.Panier;

//     let totalQuantity :any =0
//     Panier.forEach(item => {
//         totalQuantity += item.qte;
//     });

//     let currentDate = new Date();
//     let timeInMinutes =15 * totalQuantity
//     let newDate = new Date(currentDate.getTime() + timeInMinutes * 60000);
//     let currentTime = newDate.toLocaleTimeString();

//     const [paymentOption, setPaymentOption] = useState("");

//     const [chosenOption, setChosenOption] = useState("");
//     const [selectedTime, setSelectedTime] = useState(currentTime);
//     const [deliveryAddress, setDeliveryAddress] = useState("");

//     const handleClose = () => {
//         setShowModal(false);

//     };

//     const handleOptionClick = (option:any) => {
//         setChosenOption(option);
//     };

//     const handleTimeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
//         if( currentTime <= event.target.value ){
//             setSelectedTime(event.target.value);
//         }

//     };

//     const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setDeliveryAddress(event.target.value);
//     };
//     const handleValidateClick = async (option: any) => {
//         if(currentTime <= selectedTime ){

//             if (selectedTime === "" ) {
//                 alert("insert time");
//               } else if (chosenOption === "") {
//                 alert("choose sale mode");
//               } else if (chosenOption === "emporter") {
//                 setPaymentOption(option);
//               }else if (chosenOption === "livraison") {
//                 setPaymentOption(option);
//               }

//         }
//         }

//     useEffect(() => {
//         const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
//         setSelectedTime(currentTime);
//     }, []);
//     const handlePaymentOptionClick = (option: any) => {
//         if (option === "espece") {
//             // Redirect to the Commande page
//             // You might need to use a router here if you have one, like:
//             // router.push('/commande');
//             handleClose(); // For now, we'll just close the modal
//         } else {
//             setPaymentOption(option);
//         }
//     };

//     return (
//         <Transition appear show={true} as={Fragment}>
//             <Dialog as="div" className="relative z-10" onClose={handleClose}>
//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <div className="fixed inset-0 bg-black bg-opacity-25" />
//                 </Transition.Child>
//                 <div className="fixed inset-0 overflow-y-auto">
//                     <div className="flex min-h-full items-center justify-center p-4 text-center">
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
//                                 <div className="flex justify-between items-center border-b pb-3 mb-4">
//                                     <h5 className="text-xl font-bold text-gray-800">Modes de retrait</h5>
//                                     <button className="text-gray-500 hover:text-gray-800" onClick={handleClose}>
//                                         ✕
//                                     </button>
//                                 </div>
//                                 {paymentOption !== "paye" ? (
//                                     <>
//                                 <div className="grid grid-cols-2 gap-4 mb-4">
//                                     <div className="text-center">
//                                         <button
//                                           style={{
//                                             backgroundColor: chosenOption === "emporter" ? "green" : "",
//                                             borderRadius: "100%",
//                                           }}
//                                          onClick={() => handleOptionClick("emporter")}>
//                                             <Image src={panierrepas} alt="Emporter" width={60} height={60} />
//                                         </button>
//                                         <p className="mt-2">A emporter</p>
//                                     </div>
//                                     <div className="text-center">
//                                         <button
//                                          style={{
//                                           backgroundColor: chosenOption === "livraison" ? "green" : "",
//                                           borderRadius: "100%",
//                                         }}
//                                          onClick={() => handleOptionClick("livraison")}>
//                                             <Image src={moto} alt="Livraison" width={60} height={60} />
//                                         </button>
//                                         <p className="mt-2">Livraison</p>
//                                     </div>
//                                 </div>
//                                 <div className="text-center mb-4">

//                                     <input
//                                       type="time"
//                                       id="appt"
//                                       name="appt"
//                                       className="mt-1 px-4 py-2 border rounded-lg"
//                                       value={selectedTime}
//                                       onChange={handleTimeChange}
//                                        />

//                                     <p className="text-red-500"> Minimum time is  {currentTime }</p>
//                                 </div>
//                                 {chosenOption === "livraison" && (
//                                     <div className="mb-4">
//                                         <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700">Adresse de livraison:</label>
//                                         <input type="text" id="deliveryAddress" value={deliveryAddress} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleAddressChange} placeholder="Entrez votre adresse" />
//                                     </div>
//                                 )}
//                                 <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" onClick={() => handleValidateClick("paye")}>
//                                     Valider
//                                 </button>
//                                 </>
//                                 ) : (
//                                       <div className="grid grid-cols-2 gap-4 mb-4">
//                                             <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2" onClick={() => handlePaymentOptionClick("espece")}>
//                                                 Espece
//                                             </button>
//                                             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" onClick={() => handleValidateClick("carte")}>
//                                                 Par Carte
//                                             </button>
//                                         </div>
//                                 )}
//                             </Dialog.Panel>
//                         </Transition.Child>
//                     </div>
//                 </div>
//             </Dialog>
//         </Transition>
//     );
// };

// export default ModalCategorie;

"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import moto from "../../../public/image/moto.png";
import panierrepas from "../../../public/image/panierrepas.png";
import { Dialog, Transition } from "@headlessui/react";
import "./Modal.css";
import { useSnapshot } from "valtio";
import store from "../store/store";
import { useRouter } from "next/navigation";
const ModalCategorie = ({ setShowModal, setIsSignInOpen }: any) => {
  const panierSnapshot = useSnapshot(store);
  const userId = localStorage.getItem("userId");
  const { selectedCategorie } = useSnapshot(store);
  console.log({ selectedCategorie });
  const router = useRouter();
  const Panier = panierSnapshot.Panier;
  const [paymentOption, setPaymentOption] = useState("");

  let totalQuantity: any = 0;
  Panier.forEach((item) => {
    totalQuantity += item.qte;
  });

  let currentDate = new Date();
  let timeInMinutes = 15 * totalQuantity;
  let newDate = new Date(currentDate.getTime() + timeInMinutes * 60000);
  let currentTime = newDate.toLocaleTimeString();

  const [chosenOption, setChosenOption] = useState("");
  const [selectedTime, setSelectedTime] = useState(currentTime);
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOptionClick = (option: any) => {
    setChosenOption(option);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentTime <= event.target.value) {
      setSelectedTime(event.target.value);
    }
  };
  const handlepaye = async ({
    cartItem,
    id_user,
    etat,
    prix,
    ModeRetrait,
  }: any) => {
    const Panier = panierSnapshot.Panier;
    let DataCartItem: any = [];
    let TPrix: any = 0;
    for (let item of Panier) {
      TPrix += item.prix;
      DataCartItem.push({ ...item });
    }

    let body = {
      cartItem: { ...DataCartItem },
      id_user: Number(userId),
      etat: etat,
      prix: TPrix,
      ModeRetrait: {
        Mode: chosenOption,
        time: selectedTime,
      },
      address: deliveryAddress,
    };
    let response = await fetch(
      "http://localhost:8000/backend/panier/AddPanier",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  };
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryAddress(event.target.value);
  };
  const handleValidateClick = async (option: any) => {
    if (currentTime <= selectedTime) {
      if (selectedTime === "") {
        alert("insert time");
      } else if (chosenOption === "") {
        alert("choose sale mode");
      } else if (chosenOption === "emporter") {
        setPaymentOption(option);
      } else if (chosenOption === "livraison") {
        setPaymentOption(option);
      }
    }
  };

  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
    });
    setSelectedTime(currentTime);
  }, []);
  const handlePaymentOptionClick = (option: any) => {
    if (option === "espece") {
      // Redirect to the Commande page
      // You might need to use a router here if you have one, like:
      // router.push('/commande');
      handleClose(); // For now, we'll just close the modal
    } else {
      setPaymentOption(option);
    }
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                  <h5 className="text-xl font-bold text-gray-800">
                    Modes de retrait
                  </h5>
                  <button
                    className="text-gray-500 hover:text-gray-800"
                    onClick={handleClose}
                  >
                    ✕
                  </button>
                </div>
                {paymentOption !== "paye" ? (
                  <>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <button
                          style={{
                            backgroundColor:
                              chosenOption === "emporter" ? "green" : "",
                            borderRadius: "100%",
                          }}
                          onClick={() => handleOptionClick("emporter")}
                        >
                          <Image
                            src={panierrepas}
                            alt="Emporter"
                            width={60}
                            height={60}
                          />
                        </button>
                        <p className="mt-2">A emporter</p>
                      </div>
                      <div className="text-center">
                        <button
                          style={{
                            backgroundColor:
                              chosenOption === "livraison" ? "green" : "",
                            borderRadius: "100%",
                          }}
                          onClick={() => handleOptionClick("livraison")}
                        >
                          <Image
                            src={moto}
                            alt="Livraison"
                            width={60}
                            height={60}
                          />
                        </button>
                        <p className="mt-2">Livraison</p>
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <input
                        type="time"
                        id="appt"
                        name="appt"
                        className="mt-1 px-4 py-2 border rounded-lg"
                        value={selectedTime}
                        onChange={handleTimeChange}
                      />

                      <p className="text-red-500">
                        {" "}
                        Minimum time is {currentTime}
                      </p>
                    </div>
                    {chosenOption === "livraison" && (
                      <div className="mb-4">
                        <label
                          htmlFor="deliveryAddress"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Adresse de livraison:
                        </label>
                        <input
                          type="text"
                          id="deliveryAddress"
                          value={deliveryAddress}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={handleAddressChange}
                          placeholder="Entrez votre adresse"
                        />
                      </div>
                    )}
                    <button
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                      onClick={() => handleValidateClick("paye")}
                    >
                      Valider
                    </button>
                  </>
                ) : (
                  <div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <button
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
                        onClick={() => handlePaymentOptionClick("espece")}
                      >
                        Espece
                      </button>
                      <button
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                        onClick={() => handleValidateClick("carte")}
                      >
                        Par Carte
                      </button>
                    </div>
                    <button
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                      onClick={handlepaye}
                    >
                      paye
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalCategorie;
