// "use client";
// import React, { useEffect, useState } from "react";
// import './style.css'; // Assurez-vous de créer ce fichier CSS pour les styles personnalisés

// interface Commande {
//   id: number;
//   etat: string;
//   prix: string;
//   id_user: number;
//   createdAt: string;
//   ModeRetrait: { Mode: string; time: string };
//   cartItem: { [key: string]: { title: string } };
//   etat_Commande: string;
// }

// const CommandeItem = ({ commandeItem }: { commandeItem: Commande }) => (
//   <div key={commandeItem.id} className="invoice-card">
//     <div className="invoice-header">
//       <h2 className="invoice-title">Facture</h2>
//       <div className="invoice-id">Commande ID: {commandeItem.id}</div>
//     </div>
//     <div className="invoice-body">
//       <CommandeRow label="Commande" value={Object.values(commandeItem.cartItem).map((item, index) => (
//         <span key={index} className="invoice-item">{item.title}</span>
//       ))} />
//       <CommandeRow label="Mode de retrait" value={commandeItem.ModeRetrait.Mode} />
//       <CommandeRow label="État de commande" value={commandeItem.etat_Commande} />
//       <CommandeRow label="Date de retrait" value={commandeItem.ModeRetrait.time} />
//       <CommandeRow label="État du paiement" value={commandeItem.etat} />
//       <CommandeRow label="Montant" value={`${commandeItem.prix} €`} />
//     </div>
//     <div className="invoice-footer">
//       <div>Date de commande: {new Date(commandeItem.createdAt).toLocaleDateString()}</div>
//     </div>
//   </div>
// );

// const CommandeRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
//   <div className="invoice-row">
//     <div className="invoice-label">{label}</div>
//     <div className="invoice-value">{value}</div>
//   </div>
// );

// function HistoriquedeCommande() {
//   const [commande, setCommande] = useState<any>([]);

//   const fetchCommande = async () => {
//     const user_id = localStorage.getItem("userId");
//     console.log({user_id});

//     try {
//       const response = await fetch(`http://localhost:8000/backend/panier/${user_id}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         console.log({data});

//         setCommande(data);
//       } else {
//         console.error("Failed to fetch Commande");
//       }
//     } catch (error) {
//       console.error("Error fetching Commande:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCommande();
//   }, []);

//   return (
//     <>
//       {commande.map((commandeItem: Commande) => (
//         <CommandeItem key={commandeItem.id} commandeItem={commandeItem} />
//       ))}
//     </>
//   );
// }

// export default  HistoriquedeCommande;


