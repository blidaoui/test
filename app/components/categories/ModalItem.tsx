// // import React, { useState, useEffect } from "react";
// // import { Button, Modal, Alert } from "react-bootstrap";
// // import { useSnapshot } from "valtio";
// // import store, { addToCart } from "../store/store";

// // function ModalItem({ modal, setModal, Item }: any) {
// //   const { Panier } = useSnapshot(store);
// //   const [Somme, SetSomme] = useState(Number(Item.price.priceHT) ?? 0);
// //   const [checkedCompositions, setCheckedCompositions] = useState<{ [key: string]: boolean }>({});
// //   const [supplementQuantities, setSupplementQuantities] = useState<{ [key: string]: number }>({});
// //   const [errorMessage, setErrorMessage] = useState<string | null>(null);

// //   useEffect(() => {
// //     // Initialize the checked state for compositions
// //     const initialCheckedState: { [key: string]: boolean } = {};
// //     if (Item?.basicComposition) {
// //       Object.entries(Item.basicComposition).forEach(([key]) => {
// //         initialCheckedState[key] = true; // Checked by default
// //       });
// //     }
// //     setCheckedCompositions(initialCheckedState);

// //     // Initialize the supplement quantities
// //     const initialSupplementQuantities: { [key: string]: number } = {};
// //     if (card?.supplements) {
// //       Object.keys(card.supplements).forEach((key) => {
// //         initialSupplementQuantities[key] = 0; // Initialize all quantities to 0
// //       });
// //     }
// //     setSupplementQuantities(initialSupplementQuantities);
// //   }, [Item]);

// //   const toggle = () => setModal(!modal);

// //   const handleCheckboxChange = (key: string) => {
// //     setCheckedCompositions({
// //       ...checkedCompositions,
// //       [key]: !checkedCompositions[key],
// //     });
// //   };

// //   const onClickAdd = () => {
// //     let copPanier: any = [...Panier];
// //     let prix = Item?.price?.priceHT || 0;
// //     const existingItemIndex = copPanier.findIndex((item: any) => item.uiiditem === Item.id);

// //     if (existingItemIndex !== -1) {
// //       copPanier[existingItemIndex] = {
// //         ...copPanier[existingItemIndex],
// //         qte: copPanier[existingItemIndex].qte + 1,
// //         prix: parseFloat(((copPanier[existingItemIndex].qte + 1) * copPanier[existingItemIndex].prixuniter).toFixed(2)),
// //       };
// //     } else {
// //       copPanier.push({
// //         uiiditem: Item.id,
// //         title: Item.title,
// //         qte: 1,
// //         prixuniter: prix,
// //         prix: Somme,
// //       });
// //     }

// //     addToCart(copPanier);
// //     toggle();
// //   };

// //   const addSupplementToTotal = (key: string, price: number) => {
// //     const availableQuantity = card.supplements[key].quantity;
// //     if (supplementQuantities[key] < availableQuantity) {
// //       setSupplementQuantities({
// //         ...supplementQuantities,
// //         [key]: supplementQuantities[key] + 1,
// //       });
// //       SetSomme(Somme + price);
// //       setErrorMessage(null);
// //     } else {
// //       setErrorMessage(`Tu ne peut pas ajouter plus que la quantité disponible (${availableQuantity}) pour ${card.supplements[key].title}`);
// //     }
// //   };

// //   const removeSupplement = (key: string, price: number) => {
// //     if (supplementQuantities[key] > 0) {
// //       const newQuantity = supplementQuantities[key] - 1;
// //       setSupplementQuantities({
// //         ...supplementQuantities,
// //         [key]: newQuantity,
// //       });

// //       const newTotal = Somme - price;
// //       const updatedTotal = newTotal < Item.price.priceHT ? Item.price.priceHT : newTotal;
// //       SetSomme(updatedTotal);
// //       setErrorMessage(null);
// //     }
// //   };

// //   const imageUrl =
// //     Item.imageUrl.Default.urlDefault ||
// //     "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp";

// //   const cat: any = localStorage.getItem("card");
// //   let card = JSON.parse(cat || null);

// //   return (
// //     <Modal show={modal} onHide={toggle}>
// //       <Modal.Header closeButton>
// //         <Modal.Title>{Item.title}</Modal.Title>
// //       </Modal.Header>
// //       <Modal.Body>
// //         {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
// //         <img className="card-img-top" src={imageUrl} alt="Card image cap" />
// //         <h5>Composition de base :</h5>
// //         <div className="row">
// //           {Item?.basicComposition &&
// //             Object.entries(Item.basicComposition).map(([key, value]: any) => (
// //               <div className="col-md-4 my-2" key={key}>
// //                 <label className="checkbox-custom">
// //                   <div className="d-flex">
// //                     <input
// //                       type="checkbox"
// //                       style={{
// //                         border: "1px solid",
// //                         width: "25px",
// //                         height: "25px",
// //                         borderColor: "#5d5d5d",
// //                         borderRadius: "0",
// //                       }}
// //                       name={value?.title}
// //                       value={value?.title}
// //                       checked={checkedCompositions[key]}
// //                       onChange={() => handleCheckboxChange(key)}
// //                     />
// //                     <h6 style={{ marginLeft: "25px" }}>
// //                       {value?.title || ""}
// //                     </h6>
// //                   </div>
// //                   <span className="checkmark"></span>
// //                 </label>
// //               </div>
// //             ))}
// //         </div>
// //         <div className="text-left text-lg">
// //           <p>PIZZA SUPPLEMENTS</p>
// //           <div className="gap-2">
// //             {Object.keys(card?.supplements).map((key: any) => (
// //               <div
// //                 key={key}
// //                 className="row mx-1 py-2 my-2 rounded border "
// //                 style={{
// //                   borderColor: "#5d5d5d",
// //                   border: "1px solid couleurcadre",
// //                 }}
// //               >
// //                 <div className="d-flex justify-content-between align-items-center col pl-1 pr-0">
// //                   <div className="d-flex align-content-center align-items-center">
// //                     <div data-toggle="buttons">
// //                       <label className="btn d-flex justify-content-center align-items-center "></label>
// //                     </div>
// //                     {card?.supplements[key]?.title}
// //                   </div>
// //                   <div className="d-flex align-items-center float-right">
// //                     <div
// //                       className="d-flex align-content-center align-items-center float-left position-absolute mr-5"
// //                       style={{ right: "50px" }}
// //                     >
// //                       <Button
// //                         className="bg-gray-700 border border-gray-900 w-25 h-25"
// //                         onClick={() => addSupplementToTotal(key, card?.supplements[key]?.price)}
// //                       >
// //                         +
// //                       </Button>
// //                       {supplementQuantities[key]}
// //                       <Button
// //                         className="bg-gray-700 border border-gray-900 w-25 h-25"
// //                         onClick={() => removeSupplement(key, card?.supplements[key]?.price)}
// //                       >
// //                         −
// //                       </Button>
// //                     </div>
// //                     <div className="align-content-center float-right">
// //                       <p>{card?.supplements[key]?.price} €</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </Modal.Body>
// //       <Modal.Footer>
// //         <Button>Total: {Somme.toFixed(2)} €</Button>
// //         <Button variant="primary" onClick={onClickAdd}>
// //           Ajouter Produit
// //         </Button>
// //       </Modal.Footer>
// //     </Modal>
// //   );
// // }

// // export default ModalItem;

// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useEffect, useState } from "react";
// import { LockClosedIcon } from "@heroicons/react/20/solid";
// import Link from "next/link";
// import Image from "next/image";
// import { GoSignOut } from "react-icons/go";
// import store, { addToCart } from "../store/store";
// import { useSnapshot } from "valtio";
// import { Button } from "react-bootstrap";

// const ModalItem = ({ Item }: any) => {
//   let [isOpen, setIsOpen] = useState(false);

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const openModal = () => {
//     setIsOpen(true);
//   };
//   const { Panier } = useSnapshot(store);
//   const [Somme, SetSomme] = useState(Number(Item.price.priceHT) ?? 0);
//   const [checkedCompositions, setCheckedCompositions] = useState<{
//     [key: string]: boolean;
//   }>({});
//   const [supplementQuantities, setSupplementQuantities] = useState<{
//     [key: string]: number;
//   }>({});
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   useEffect(() => {
//     // Initialize the checked state for compositions
//     const initialCheckedState: { [key: string]: boolean } = {};
//     if (Item?.basicComposition) {
//       Object.entries(Item.basicComposition).forEach(([key]) => {
//         initialCheckedState[key] = true; // Checked by default
//       });
//     }
//     setCheckedCompositions(initialCheckedState);

//     // Initialize the supplement quantities
//     const initialSupplementQuantities: { [key: string]: number } = {};
//     if (card?.supplements) {
//       Object.keys(card.supplements).forEach((key) => {
//         initialSupplementQuantities[key] = 0; // Initialize all quantities to 0
//       });
//     }
//     setSupplementQuantities(initialSupplementQuantities);
//   }, [Item]);

//   const handleCheckboxChange = (key: string) => {
//     setCheckedCompositions({
//       ...checkedCompositions,
//       [key]: !checkedCompositions[key],
//     });
//   };

//   const onClickAdd = () => {
//     let copPanier: any = [...Panier];
//     let prix = Item?.price?.priceHT || 0;
//     const existingItemIndex = copPanier.findIndex(
//       (item: any) => item.uiiditem === Item.id
//     );

//     if (existingItemIndex !== -1) {
//       copPanier[existingItemIndex] = {
//         ...copPanier[existingItemIndex],
//         qte: copPanier[existingItemIndex].qte + 1,
//         prix: parseFloat(
//           (
//             (copPanier[existingItemIndex].qte + 1) *
//             copPanier[existingItemIndex].prixuniter
//           ).toFixed(2)
//         ),
//       };
//     } else {
//       copPanier.push({
//         uiiditem: Item.id,
//         title: Item.title,
//         qte: 1,
//         prixuniter: prix,
//         prix: Somme,
//       });
//     }

//     addToCart(copPanier);
//   };

//   const addSupplementToTotal = (key: string, price: number) => {
//     const availableQuantity = card.supplements[key].quantity;
//     if (supplementQuantities[key] < availableQuantity) {
//       setSupplementQuantities({
//         ...supplementQuantities,
//         [key]: supplementQuantities[key] + 1,
//       });
//       SetSomme(Somme + price);
//       setErrorMessage(null);
//     } else {
//       setErrorMessage(
//         `Tu ne peux pas ajouter plus que la quantité disponible (${availableQuantity}) pour ${card.supplements[key].title}`
//       );
//     }
//   };

//   const removeSupplement = (key: string, price: number) => {
//     if (supplementQuantities[key] > 0) {
//       const newQuantity = supplementQuantities[key] - 1;
//       setSupplementQuantities({
//         ...supplementQuantities,
//         [key]: newQuantity,
//       });

//       const newTotal = Somme - price;
//       const updatedTotal =
//         newTotal < Item.price.priceHT ? Item.price.priceHT : newTotal;
//       SetSomme(updatedTotal);
//       setErrorMessage(null);
//     }
//   };

//   const imageUrl =
//     Item.imageUrl.Default.urlDefault ||
//     "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp";

//   const cat: any = localStorage.getItem("card");
//   let card = JSON.parse(cat || null);

//   return (
//     <>
//       {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

//       </div> */}

//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//                     <div className="w-full max-w-md space-y-8">
//                       <div>
//                         <div className="flex items-center justify-center">
//                           {Item.title}
//                         </div>
//                       </div>
//                       <img
//                         className="card-img-top"
//                         src={imageUrl}
//                         alt="Card image cap"
//                       />
//                       <h5>Composition de base :</h5>
//                       <div className="row">
//                         {Item?.basicComposition &&
//                           Object.entries(Item.basicComposition).map(
//                             ([key, value]: any) => (
//                               <div className="col-md-4 my-2" key={key}>
//                                 <label className="checkbox-custom">
//                                   <div className="d-flex">
//                                     <input
//                                       type="checkbox"
//                                       style={{
//                                         border: "1px solid",
//                                         width: "25px",
//                                         height: "25px",
//                                         borderColor: "#5d5d5d",
//                                         borderRadius: "0",
//                                       }}
//                                       name={value?.title}
//                                       value={value?.title}
//                                       checked={checkedCompositions[key]}
//                                       onChange={() => handleCheckboxChange(key)}
//                                     />
//                                     <h6 style={{ marginLeft: "25px" }}>
//                                       {value?.title || ""}
//                                     </h6>
//                                   </div>
//                                   <span className="checkmark"></span>
//                                 </label>
//                               </div>
//                             )
//                           )}
//                       </div>
//                       <div className="text-left text-lg">
//                         <p>PIZZA SUPPLEMENTS</p>
//                         <div className="gap-2">
//                           {Object.keys(card?.supplements).map((key: any) => (
//                             <div
//                               key={key}
//                               className="row mx-1 py-2 my-2 rounded border "
//                               style={{
//                                 borderColor: "#5d5d5d",
//                                 border: "1px solid couleurcadre",
//                               }}
//                             >
//                               <div className="d-flex justify-content-between align-items-center col pl-1 pr-0">
//                                 <div className="d-flex align-content-center align-items-center">
//                                   <div data-toggle="buttons">
//                                     <label className="btn d-flex justify-content-center align-items-center "></label>
//                                   </div>
//                                   {card?.supplements[key]?.title}
//                                 </div>
//                                 <div className="d-flex align-items-center float-right">
//                                   <div
//                                     className="d-flex align-content-center align-items-center float-left position-absolute mr-5"
//                                     style={{ right: "50px" }}
//                                   >
//                                     <Button
//                                       className="bg-gray-700 border border-gray-900 w-25 h-25"
//                                       onClick={() =>
//                                         addSupplementToTotal(
//                                           key,
//                                           card?.supplements[key]?.price
//                                         )
//                                       }
//                                     >
//                                       +
//                                     </Button>
//                                     {supplementQuantities[key]}
//                                     <Button
//                                       className="bg-gray-700 border border-gray-900 w-25 h-25"
//                                       onClick={() =>
//                                         removeSupplement(
//                                           key,
//                                           card?.supplements[key]?.price
//                                         )
//                                       }
//                                     >
//                                       −
//                                     </Button>
//                                   </div>
//                                   <div className="align-content-center float-right">
//                                     <p>{card?.supplements[key]?.price} €</p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex justify-end">
//                     <button
//                       type="button"
//                       className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-2xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                       onClick={closeModal}
//                     >
//                       <Button>Total: {Somme.toFixed(2)} €</Button>
//                       <Button variant="primary" onClick={onClickAdd}>
//                         Ajouter Produit
//                       </Button>
//                     </button>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// };

// export default ModalItem;

// "use client "
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import store, { addToCart } from "../store/store";
// import { useSnapshot } from "valtio";

// const ModalItem = ({ Item, onClose }: any) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const { Panier } = useSnapshot(store);
//   const [Somme, SetSomme] = useState(Number(Item.price.priceHT) ?? 0);
//   const [checkedCompositions, setCheckedCompositions] = useState<{
//     [key: string]: boolean;
//   }>({});
//   const [supplementQuantities, setSupplementQuantities] = useState<{
//     [key: string]: number;
//   }>({});
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   useEffect(() => {
//     const initialCheckedState: { [key: string]: boolean } = {};
//     if (Item?.basicComposition) {
//       Object.entries(Item.basicComposition).forEach(([key]) => {
//         initialCheckedState[key] = true;
//       });
//     }
//     setCheckedCompositions(initialCheckedState);

//     const initialSupplementQuantities: { [key: string]: number } = {};
//     if (card?.supplements) {
//       Object.keys(card.supplements).forEach((key) => {
//         initialSupplementQuantities[key] = 0;
//       });
//     }
//     setSupplementQuantities(initialSupplementQuantities);
//   }, [Item]);

//   const handleCheckboxChange = (key: string) => {
//     setCheckedCompositions({
//       ...checkedCompositions,
//       [key]: !checkedCompositions[key],
//     });
//   };

//   const onClickAdd = () => {
//     let copPanier: any = [...Panier];
//     let prix = Item?.price?.priceHT || 0;
//     const existingItemIndex = copPanier.findIndex(
//       (item: any) => item.uiiditem === Item.id
//     );

//     if (existingItemIndex !== -1) {
//       copPanier[existingItemIndex] = {
//         ...copPanier[existingItemIndex],
//         qte: copPanier[existingItemIndex].qte + 1,
//         prix: parseFloat(
//           (
//             (copPanier[existingItemIndex].qte + 1) *
//             copPanier[existingItemIndex].prixuniter
//           ).toFixed(2)
//         ),
//       };
//     } else {
//       copPanier.push({
//         uiiditem: Item.id,
//         title: Item.title,
//         qte: 1,
//         prixuniter: prix,
//         prix: Somme,
//       });
//     }

//     addToCart(copPanier);
//     onClose();
//   };

//   const addSupplementToTotal = (key: string, price: number) => {
//     const availableQuantity = card.supplements[key].quantity;
//     if (supplementQuantities[key] < availableQuantity) {
//       setSupplementQuantities({
//         ...supplementQuantities,
//         [key]: supplementQuantities[key] + 1,
//       });
//       SetSomme(Somme + price);
//       setErrorMessage(null);
//     } else {
//       setErrorMessage(
//         `Tu ne peux pas ajouter plus que la quantité disponible (${availableQuantity}) pour ${card.supplements[key].title}`
//       );
//     }
//   };

//   const removeSupplement = (key: string, price: number) => {
//     if (supplementQuantities[key] > 0) {
//       const newQuantity = supplementQuantities[key] - 1;
//       setSupplementQuantities({
//         ...supplementQuantities,
//         [key]: newQuantity,
//       });

//       const newTotal = Somme - price;
//       const updatedTotal =
//         newTotal < Item.price.priceHT ? Item.price.priceHT : newTotal;
//       SetSomme(updatedTotal);
//       setErrorMessage(null);
//     }
//   };

//   const imageUrl =
//     Item.imageUrl.Default.urlDefault ||
//     "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp";

//   const cat: any = localStorage.getItem("card");
//   let card = JSON.parse(cat || null);

//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={onClose}>
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
//               <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
//                 <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//                   <div className="w-full max-w-md space-y-8">
//                     <div>
//                       <div
//                       className="flex items-center justify-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2  text-4xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

//                       >
//                         {Item.title}
//                       </div>
//                     </div>
//                     <img
//                       className="card-img-top"
//                       src={imageUrl}
//                       alt="Card image cap"
//                     />
//                     <h5>Composition de base :</h5>
//                     <div className="row">
//                       {Item?.basicComposition &&
//                         Object.entries(Item.basicComposition).map(
//                           ([key, value]: any) => (
//                             <div className="col-md-4 my-2" key={key}>
//                               <label className="checkbox-custom">
//                                 <div className="d-flex">
//                                   <input
//                                     type="checkbox"
//                                     style={{
//                                       border: "1px solid",
//                                       width: "25px",
//                                       height: "25px",
//                                       borderColor: "#5d5d5d",
//                                       borderRadius: "0",
//                                     }}
//                                     name={value?.title}
//                                     value={value?.title}
//                                     checked={checkedCompositions[key]}
//                                     onChange={() => handleCheckboxChange(key)}
//                                   />
//                                   <h6 style={{ marginLeft: "25px" }}>
//                                     {value?.title || ""}
//                                   </h6>
//                                 </div>
//                                 <span className="checkmark"></span>
//                               </label>
//                             </div>
//                           )
//                         )}
//                     </div>
//                     <div className="text-left text-lg">
//                       <p>PIZZA SUPPLEMENTS</p>
//                       <div className="gap-2">
//                         {Object.keys(card?.supplements).map((key: any) => (
//                           <div
//                             key={key}
//                             className="row mx-1 py-2 my-2 rounded border "
//                             style={{
//                               borderColor: "#5d5d5d",
//                               border: "1px solid couleurcadre",
//                             }}
//                           >
//                             <div className="d-flex justify-content-between align-items-center col pl-1 pr-0">
//                               <div className="d-flex align-content-center align-items-center">
//                                 <div data-toggle="buttons">
//                                   <label className="btn d-flex justify-content-center align-items-center "></label>
//                                 </div>
//                                 {card?.supplements[key]?.title}
//                               </div>
//                               <div className="d-flex align-items-center float-right">
//                                 <div
//                                   className="d-flex align-content-center align-items-center float-left position-absolute mr-5"
//                                   style={{ right: "50px" }}
//                                 >
//                                   <Button
//                                     className="bg-gray-700 border border-gray-900 w-25 h-25"
//                                     onClick={() =>
//                                       addSupplementToTotal(
//                                         key,
//                                         card?.supplements[key]?.price
//                                       )
//                                     }
//                                   >
//                                     +
//                                   </Button>
//                                   {supplementQuantities[key]}
//                                   <Button
//                                     className="bg-gray-700 border border-gray-900 w-25 h-25"
//                                     onClick={() =>
//                                       removeSupplement(
//                                         key,
//                                         card?.supplements[key]?.price
//                                       )
//                                     }
//                                   >
//                                     −
//                                   </Button>
//                                 </div>
//                                 <div className="align-content-center float-right">
//                                   <p>{card?.supplements[key]?.price} €</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                 <div className="mt-4 flex justify-end">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-2xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                     onClick={onClose}
//                   >
//                     <Button>Total: {Somme.toFixed(2)} €</Button>
//                     <Button variant="primary" onClick={onClickAdd}>
//                       Ajouter Produit
//                     </Button>
//                   </button>
//                 </div>
//                 </div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// export default ModalItem;

"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import store, { addToCart } from "../store/store";
import { useSnapshot } from "valtio";

const ModalItem = ({ Item, onClose }: any) => {
  const isAdmin = localStorage.getItem('admin') === 'true'

  const [isOpen, setIsOpen] = useState(true);
  const userId = localStorage.getItem("userId");
  const { Panier } = useSnapshot(store);
  const [Somme, SetSomme] = useState(Number(Item.price.priceHT) ?? 0);
  const [checkedCompositions, setCheckedCompositions] = useState<{
    [key: string]: boolean;
  }>({});
  const [supplementQuantities, setSupplementQuantities] = useState<{
    [key: string]: number;
  }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const initialCheckedState: { [key: string]: boolean } = {};
    if (Item?.basicComposition) {
      Object.entries(Item.basicComposition).forEach(([key]) => {
        initialCheckedState[key] = true;
      });
    }
    setCheckedCompositions(initialCheckedState);

    const initialSupplementQuantities: { [key: string]: number } = {};
    if (card?.supplements) {
      Object.keys(card.supplements).forEach((key) => {
        initialSupplementQuantities[key] = 0;
      });
    }
    setSupplementQuantities(initialSupplementQuantities);
  }, [Item]);

  const handleValidateClick = async () => {
    let DataCartItem :any= 
      {
        "qte": 1,
        "prix":Item.price.priceHT,
        "title": Item.title,
        "uiiditem": [
          Item.id
        ],
        "prixuniter":Item.price.priceHT
      }
    
    


    let body = {
      cartItem: { ...DataCartItem },
      id_user: Number(userId),
      etat: "En cour de preparation",
      prix: Somme,
      ModeRetrait: {
        Mode: "",
        time: "",
      },
      address: "",
    };
 

    try {
      let response = await fetch(
        "http://localhost:8000/backend/panier/AddPanier",
        {
          method: "POST",
              headers: { "Content-Type": "application/json" },
body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      onClose(); // Fermer le modal après succès
    } catch (error) {
      console.error("Failed to save cart item:", error);
      setErrorMessage("Erreur lors de l'ajout au panier");
    }
  };

  const handleCheckboxChange = (key: string) => {
    setCheckedCompositions({
      ...checkedCompositions,
      [key]: !checkedCompositions[key],
    });
  };

  const onClickAdd = () => {
    let copPanier: any = [...Panier];
    let prix = Item?.price?.priceHT || 0;
    const existingItemIndex = JSON.parse(JSON.stringify(copPanier)).findIndex(
      (item: any) => item.uiiditem[0] === Item.id[0]
    );
    if (existingItemIndex !== -1) {
      copPanier[existingItemIndex] = {
        ...copPanier[existingItemIndex],
        qte: copPanier[existingItemIndex].qte + 1,
        prix: parseFloat(
          (
            (copPanier[existingItemIndex].qte + 1) *
            copPanier[existingItemIndex].prixuniter
          ).toFixed(2)
        ),
      };
    } else {
      copPanier.push({
        uiiditem: Item.id,
        title: Item.title,
        qte: 1,
        prixuniter: prix,
        prix: Somme,
        image:
          Item.imageUrl.Default.urlDefault ||
          "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp",
      });
    }

    addToCart(copPanier);
    onClose();
  };

  const addSupplementToTotal = (key: string, price: number) => {
    const availableQuantity = card.supplements[key].quantity;
    if (supplementQuantities[key] < availableQuantity) {
      setSupplementQuantities({
        ...supplementQuantities,
        [key]: supplementQuantities[key] + 1,
      });
      SetSomme(Somme + price);
      setErrorMessage(null);
    } else {
      setErrorMessage(
        `Tu ne peux pas ajouter plus que la quantité disponible (${availableQuantity}) pour ${card.supplements[key].title}`
      );
    }
  };

  const removeSupplement = (key: string, price: number) => {
    if (supplementQuantities[key] > 0) {
      const newQuantity = supplementQuantities[key] - 1;
      setSupplementQuantities({
        ...supplementQuantities,
        [key]: newQuantity,
      });

      const newTotal = Somme - price;
      const updatedTotal =
        newTotal < Item.price.priceHT ? Item.price.priceHT : newTotal;
      SetSomme(updatedTotal);
      setErrorMessage(null);
    }
  };

  const imageUrl =
    Item.imageUrl.Default.urlDefault ||
    "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp";

  const cat: any = localStorage.getItem("card");
  let card = JSON.parse(cat || null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col items-center space-y-6">
                  <h2 className="text-3xl font-semibold text-gray-800">
                    {Item.title}
                  </h2>
                  <img
                    className="rounded-md  shadow-md"
                    style={{ maxWidth: "200px", width: "auto" }}
                    src={imageUrl}
                    alt="Card image cap"
                  />
                  <div className="w-full">
                    <h5 className="text-xl font-medium text-gray-700 mb-2">
                      Composition de base :
                    </h5>
                    <div className="flex flex-wrap gap-4">
                      {Item?.basicComposition &&
                        Object.entries(Item.basicComposition).map(
                          ([key, value]: any) => (
                            <label
                              key={key}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                                checked={checkedCompositions[key]}
                                onChange={() => handleCheckboxChange(key)}
                              />
                              <span className="text-gray-700">
                                {value?.title || ""}
                              </span>
                            </label>
                          )
                        )}
                    </div>
                  </div>
                  <div className="w-full">
                    <h5 className="text-xl font-medium text-gray-700 mb-2">
                      PIZZA SUPPLEMENTS
                    </h5>
                    <div className="flex flex-col space-y-2">
                      {Object.keys(card?.supplements).map((key: any) => (
                        <div
                          key={key}
                          className="flex justify-between items-center p-2 border rounded-md shadow-sm"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-700">
                              {card?.supplements[key]?.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <button
                              className="bg-slate-300 text-black px-2 py-1 rounded-md hover:bg-blue-600"
                              onClick={() =>
                                addSupplementToTotal(
                                  key,
                                  card?.supplements[key]?.price
                                )
                              }
                            >
                              +
                            </button>
                            <span>{supplementQuantities[key]}</span>
                            <button
                              className="bg-slate-300 text-black px-2 py-1 rounded-md hover:bg-red-600"
                              onClick={() =>
                                removeSupplement(
                                  key,
                                  card?.supplements[key]?.price
                                )
                              }
                            >
                              −
                            </button>
                            <span className="text-gray-700">
                              {card?.supplements[key]?.price} €
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {errorMessage && (
                    <div className="text-red-600">{errorMessage}</div>
                  )}
                  <div className="flex justify-end space-x-4 w-full">
                    <button
                      type="button"
                      className="flex justify-end text-xl font-medium bg-bgpink text-pink py-4 px-4 lg:px-8 navbutton rounded-full"
                    >
                      Total: {Somme.toFixed(2)} €
                    </button>
                    <button
                      type="button"
                      disabled ={isAdmin}
                      className="flex justify-end text-xl font-medium bg-bgpink text-pink py-4 px-4 lg:px-8 navbutton rounded-full hover:text-white hover:bg-pink"
                      onClick={() => {
                        onClickAdd();
                        handleValidateClick();
                      }}
                    >
                      Ajouter Produit
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalItem;
