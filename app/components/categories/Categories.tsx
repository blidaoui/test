// "use client";
// import React, { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Container from "../Container";
// import { useRouter } from "next/navigation";
// import ModalItem from "./ModalItem";

// interface Category {
//   id: string;
//   title: string;
//   imageUrl: {
//     Default: {
//       urlDefault: string;
//     };
//   };
// }

// interface Product {
//   id: number;
//   card: {
//     categories: { [key: string]: Category };
//   };
// }

// interface ProductListProps {
//   product: Product[];
// }

// interface Product {
//   title: string;
//   price: {
//     priceHT: string;
//   };
//   imageUrl: {
//     Default: {
//       urlDefault: string;
//     };
//   };
// }

// const Categories: React.FC<ProductListProps> = () => {
//   const [categories, setCategories] = useState<Record<string, Category>>({});
//   const idOfShop = localStorage.getItem("idOfShop");
//   const categoryId:any = localStorage.getItem("idCategorie");
//   const router = useRouter();

//  const [modal, setModal] = useState(false);
//  const [Item, setItem] = useState<any>();
//  const [card, setCard] = useState<any>([]);

//   const getCategorie = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/backend/restaurant/${idOfShop}/categories`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setCategories(data);
//       } else {
//         console.error("Failed to fetch Categories");
//       }
//     } catch (error) {
//       console.error("Error fetching Categories:", error);
//     }
//   };

//   useEffect(() => {
//     getCategorie();
//   }, []);

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//       slidesToSlide: 4, // Optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2, // Optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1, // Optional, default to 1.
//     },
//   };

//   const handleClick = (product:any) => {
//     handleCommandeClick(product);
//   };
// const handleCommandeClick = (item: string) => {
// setItem(item);
// setModal(true);
// };
// const fetchProducts = async () => {
//   const idOfShop = localStorage.getItem("idOfShop");

//   try {
//     const response = await fetch(
//       `http://localhost:8000/backend/restaurant/${idOfShop}/${categoryId}/product`,
//       {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     if (response.ok) {
//       const data = await response.json();
//       console.log({data});

//       setCard(data);
//     } else {
//       console.error("Failed to fetch products");
//     }
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }

// React.useEffect(() => {
// fetchProducts();
// }, []);

//   return (<>
//     <div className="carousel-section bg-gray-100 py-10"  >
//       <Carousel
//         responsive={responsive}
//         infinite={false} // Disable infinite loop
//         containerClass="carousel-container"
//         itemClass="carousel-item-padding-40-px"
//       >
//         {Object.keys(categories).map((categoryId, index) => (
//           <div key={index} className="carousel-item">
//             <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
//               <div className="w-full h-40 overflow-hidden rounded-md mb-2">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={categories[categoryId].imageUrl.Default.urlDefault}
//                   alt={categories[categoryId].title}
//                 />
//               </div>
//               <div className="text-center font-semibold text-lg">
//                 {categories[categoryId].title}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//       <Container children={undefined} />
//       <React.Fragment>{card.map((product:any,key:number) =>
//     { return(  <div className="row row-cols-1 row-cols-md-4">
//           <div className="shop-content" style={{ width: "18rem" }}>
//             <div className="product-box">
//               <img
//                 className="product-img"
//                 src={ product?.imageUrl?.Default?.urlDefault ||
//                   "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"}
//                 alt="Card image cap"
//                 onClick={()=>handleClick(product)}
//               />
//               <div className="d-flex justify-content-center">
//                 <div className="d-flex flex-column bd-highlight mb-3">
//                   <div className="p-2 bd-highlight">
//                     <h5 className="product-title">
//                       {product?.title}
//                     </h5>
//                   </div>
//                   <div className="p-2 bd-highlight d-flex justify-content-center">
//                     <span className="cart-price" style={{ color: "red" }}>
//                       {product?.price?.priceHT || 0} €
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>)})}
//         {modal && <ModalItem modal={modal} setModal={setModal} Item={Item} />}
//     </React.Fragment>
//     </div>
//     </>
//   );
// };

// export default Categories;
// "use client";
// import React, { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Container from "../Container";
// import ModalItem from "./ModalItem";

// interface Category {
//   id: string;
//   title: string;
//   imageUrl: {
//     Default: {
//       urlDefault: string;
//     };
//   };
// }

// interface Product {
//   id: number;
//   title: string;
//   price: {
//     priceHT: string;
//   };
//   imageUrl: {
//     Default: {
//       urlDefault: string;
//     };
//   };
// }

// interface ProductListProps {
//   product: Product[];
// }

// const Categories: React.FC<ProductListProps> = () => {
//   const [categories, setCategories] = useState<Record<string, Category>>({});
//   const [products, setProducts] = useState<Product[]>([]);
//   const idOfShop = localStorage.getItem("idOfShop");
//   const [isOpen, setIsOpen] = useState(false);
//   const [Item, setItem] = useState<any>();

//   const getCategories = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/backend/restaurant/${idOfShop}/categories`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setCategories(data);
//       } else {
//         console.error("Failed to fetch categories");
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   const getAllProducts = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/backend/restaurant/${idOfShop}/products`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.error("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const getProductsByCategory = async (categoryId: string) => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/backend/restaurant/${idOfShop}/${categoryId}/product`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.error("Failed to fetch products by category");
//       }
//     } catch (error) {
//       console.error("Error fetching products by category:", error);
//     }
//   };

//   useEffect(() => {
//     getCategories();
//     getAllProducts();
//   }, []);

//   const handleClick = (categoryId: string) => {
//     getProductsByCategory(categoryId);
//   };

//   const handleProductClick = (product: Product) => {
//     setItem(product);
//     setIsOpen(true);

//   };

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//       slidesToSlide: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//   };
//   const handleValidateClick = (idCategorie:string) => {
//     localStorage.setItem("idCategorie",idCategorie)
//   };
//   return (
//     <>
//       <div className="carousel-section bg-gray-100 py-10">
//         <Carousel
//           responsive={responsive}
//           infinite={false}
//           containerClass="carousel-container"
//           itemClass="carousel-item-padding-40-px"
//         >
//           {Object.keys(categories).map((categoryId, index) => (
//             <div
//               key={index}
//               className="carousel-item"
//               onClick={() => handleClick(categoryId)}
//             >
//               <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
//                 <div className="w-full h-40 overflow-hidden rounded-md mb-2" onClick={()=>handleValidateClick(categoryId)}>
//                   <img
//                     className="w-full h-full object-cover"
//                     src={categories[categoryId].imageUrl.Default.urlDefault}
//                     alt={categories[categoryId].title}
//                   />
//                 </div>
//                 <div className="text-center font-semibold text-lg">
//                   {categories[categoryId].title}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//         <Container>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
//             {products.map((product, key) => (
//               <div
//                 className="shop-content"
//                 key={key}
//                 style={{ width: "18rem" }}
//               >
//                 <div className="product-box">
//                   <img
//                     className="product-img"
//                     src={
//                       product?.imageUrl?.Default?.urlDefault ||
//                       "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"
//                     }
//                     alt="Card image cap"
//                     onClick={() => handleProductClick(product)}
//                   />
//                   <div className="d-flex justify-content-center">
//                     <div className="d-flex flex-column bd-highlight mb-3">
//                       <div className="p-2 bd-highlight">
//                         <h5 className="product-title">{product?.title}</h5>
//                       </div>
//                       <div className="p-2 bd-highlight d-flex justify-content-center">
//                         <span className="cart-price" style={{ color: "red" }}>
//                           {product?.price?.priceHT || 0} €
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Container>
//         {isOpen && <ModalItem modal={isOpen} isOpen={isOpen} Item={Item} />}
//       </div>
//     </>
//   );
// };

// export default Categories;
// "use client";
// import React, { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Container from "../Container";
// import ModalItem from "./ModalItem";

// interface Category {
//   id: string;
//   title: string;
//   imageUrl: {
//     Default: {
//       urlDefault: string;
//     };
//   };
// }

// interface Product {
//   id: number;
//   title: string;
//   price: {
//     priceHT: string;
//   };
//   imageUrl: {
//     Default: {
//       urlDefault: string;
//     };
//   };
// }

// interface ProductListProps {
//   product: Product[];
// }

// const Categories: React.FC<ProductListProps> = () => {
//   const [categories, setCategories] = useState<Record<string, Category>>({});
//   const [products, setProducts] = useState<Product[]>([]);
//   const idOfShop = localStorage.getItem("idOfShop");
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState<Product | null>(null);

//   const getCategories = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/backend/restaurant/${idOfShop}/categories`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setCategories(data);
//       } else {
//         console.error("Failed to fetch categories");
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   const getAllProducts = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/backend/restaurant/${idOfShop}/products`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.error("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const getProductsByCategory = async (categoryId: string) => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/backend/restaurant/${idOfShop}/${categoryId}/product`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.error("Failed to fetch products by category");
//       }
//     } catch (error) {
//       console.error("Error fetching products by category:", error);
//     }
//   };

//   useEffect(() => {
//     getCategories();
//     getAllProducts();
//   }, []);

//   const handleCategoryClick = (categoryId: string) => {
//     getProductsByCategory(categoryId);
//     localStorage.setItem("idCategorie",categoryId)

//   };

//   const handleProductClick = (product: Product) => {
//     setSelectedItem(product);
//     setIsOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsOpen(false);
//     setSelectedItem(null);
//   };

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//       slidesToSlide: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//   };

//   return (
//     <>
//       <div className="carousel-section bg-gray-100 py-10">
//         <Carousel
//           responsive={responsive}
//           infinite={false}
//           containerClass="carousel-container"
//           itemClass="carousel-item-padding-40-px"
//         >
//           {Object.keys(categories).map((categoryId, index) => (
//             <div
//               key={index}
//               className="carousel-item"
//               onClick={() => handleCategoryClick(categoryId)
//               }
//             >
//               <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
//                 <div className="w-full h-40 overflow-hidden rounded-md mb-2">
//                   <img
//                     className="w-full h-full object-cover"
//                     src={categories[categoryId].imageUrl.Default.urlDefault}
//                     alt={categories[categoryId].title}
//                   />
//                 </div>
//                 <div className="text-center font-semibold text-lg">
//                   {categories[categoryId].title}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//         <Container>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
//             {products && products.map((product, key) => (
//               <div
//                 className="shop-content"
//                 key={key}
//                 style={{ width: "18rem" }}
//               >
//                 <div className="product-box">
//                   <img
//                     className="product-img"
//                     src={
//                       product?.imageUrl?.Default?.urlDefault ||
//                       "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"
//                     }
//                     alt="Card image cap"
//                     onClick={() => handleProductClick(product)}
//                   />
//                   <div className="d-flex justify-content-center">
//                     <div className="d-flex flex-column bd-highlight mb-3">
//                       <div className="p-2 bd-highlight">
//                         <h5 className="product-title">{product?.title}</h5>
//                       </div>
//                       <div className="p-2 bd-highlight d-flex justify-content-center">
//                         <span className="cart-price" style={{ color: "red" }}>
//                           {product?.price?.priceHT || 0} €
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Container>
//         {isOpen && selectedItem && (
//           <ModalItem Item={selectedItem} onClose={handleModalClose} />
//         )}
//       </div>
//     </>
//   );
// };

// export default Categories;

// "use client";
// import React, { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Container from "../Container";
// import ModalItem from "./ModalItem";

// interface Category {
//   id: string;
//   title: string;
//   imageUrl: {
//     Default: {
//       urlDefault: string;
//     };
//   };
// }

// interface Product {
//   id: number;
//   title: string;
//   price: {
//     priceHT: string;
//   };
//   imageUrl: {
//     Default: {
//       urlDefault: string;
//     };
//   };
// }

// interface ProductListProps {
//   product: Product[];
// }

// const Categories: React.FC<ProductListProps> = () => {
//   const [categories, setCategories] = useState<Record<string, Category>>({});
//   const [products, setProducts] = useState<Product[]>([]);
//   const idOfShop = localStorage.getItem("idOfShop");
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState<Product | null>(null);

//   const getCategories = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/backend/restaurant/${idOfShop}/categories`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setCategories(data);
//       } else {
//         console.error("Failed to fetch categories");
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   const getAllProducts = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/backend/restaurant/${idOfShop}/products`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           console.error("Products data is not an array");
//         }
//       } else {
//         console.error("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const getProductsByCategory = async (categoryId: string) => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/backend/restaurant/${idOfShop}/${categoryId}/product`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           console.error("Products data is not an array");
//         }
//       } else {
//         console.error("Failed to fetch products by category");
//       }
//     } catch (error) {
//       console.error("Error fetching products by category:", error);
//     }
//   };

//   useEffect(() => {
//     getCategories();
//     getAllProducts();
//   }, []);

//   const handleCategoryClick = (categoryId: string) => {
//     getProductsByCategory(categoryId);
//     localStorage.setItem("idCategorie", categoryId);
//   };

//   const handleProductClick = (product: Product) => {
//     setSelectedItem(product);
//     setIsOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsOpen(false);
//     setSelectedItem(null);
//   };

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//       slidesToSlide: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//   };

//   return (
//     <>
//       <div className="carousel-section bg-gray-100 py-10">
//         <Carousel
//           responsive={responsive}
//           infinite={false}
//           containerClass="carousel-container"
//           itemClass="carousel-item-padding-40-px"
//         >
//           {Object.keys(categories).map((categoryId, index) => (
//             <div
//               key={index}
//               className="carousel-item"
//               onClick={() => handleCategoryClick(categoryId)}
//             >
//               <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
//                 <div className="w-full h-40 overflow-hidden rounded-md mb-2">
//                   <img
//                     className="w-full h-full object-cover"
//                     src={categories[categoryId].imageUrl.Default.urlDefault}
//                     alt={categories[categoryId].title}
//                   />
//                 </div>
//                 <div className="text-center font-semibold text-lg">
//                   {categories[categoryId].title}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//         <Container>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 "
// >
//             {products.length > 0 ? (
//               products.map((product, key) => (
//                 <div
//                   className="shop-content"
//                   key={key}
//                   style={{ width: "18rem" }}
//                 >
//                   <div className="product-box">
//                     <img
//                       className="product-img"
//                       src={
//                         product?.imageUrl?.Default?.urlDefault ||
//                         "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"
//                       }
//                       alt="Card image cap"
//                       onClick={() => handleProductClick(product)}
//                     />
//                     <div className="d-flex justify-content-center">
//                       <div className="d-flex flex-column bd-highlight mb-3">
//                         <div className="p-2 bd-highlight">
//                           <h5 className="product-title">{product?.title}</h5>
//                         </div>
//                         <div className="p-2 bd-highlight d-flex justify-content-center">
//                           <span className="cart-price" style={{ color: "red" }}>
//                             {product?.price?.priceHT || 0} €
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-4 text-center text-gray-500">
//                 No products available.
//               </div>
//             )}
//           </div>
//         </Container>
//         {isOpen && selectedItem && (
//           <ModalItem Item={selectedItem} onClose={handleModalClose} />
//         )}

//       </div>

//     </>
//   );
// };

// export default Categories;

"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "../Container";
import ModalItem from "./ModalItem";

interface Category {
  id: string;
  title: string;
  imageUrl: {
    Default: {
      urlDefault: string;
    };
  };
}

interface Product {
  id: number;
  title: string;
  price: {
    priceHT: string;
  };
  imageUrl: {
    Default: {
      urlDefault: string;
    };
  };
}

interface ProductListProps {
  product: Product[];
}

const Categories: React.FC<ProductListProps> = () => {
  const [categories, setCategories] = useState<Record<string, Category>>({});
  const [products, setProducts] = useState<Product[]>([]);
  const idOfShop = localStorage.getItem("idOfShop");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);

  const getCategories = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/backend/restaurant/${idOfShop}/categories`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/backend/restaurant/${idOfShop}/products`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Products data is not an array");
        }
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getProductsByCategory = async (categoryId: string) => {
    try {
      const response = await fetch(
        `http://localhost:8000/backend/restaurant/${idOfShop}/${categoryId}/product`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Products data is not an array");
        }
      } else {
        console.error("Failed to fetch products by category");
      }
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

  useEffect(() => {
    getCategories();
    getAllProducts();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    getProductsByCategory(categoryId);
    localStorage.setItem("idCategorie", categoryId);
  };

  const handleProductClick = (product: Product) => {
    setSelectedItem(product);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="carousel-section bg-gray-100 py-10">
      <h2 className="text-2xl font-semibold text-center mb-4">
              Liste des categories
            </h2>
        <Carousel
          responsive={responsive}
          infinite={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {Object.keys(categories).map((categoryId, index) => (
            <div
              key={index}
              className="carousel-item"
              onClick={() => handleCategoryClick(categoryId)}
            >
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="w-full h-40 overflow-hidden rounded-md mb-2">
                  <img
                    className="w-full h-full object-cover"
                    src={categories[categoryId].imageUrl.Default.urlDefault}
                    alt={categories[categoryId].title}
                  />
                </div>
                <div className="text-center font-semibold text-lg">
                  {categories[categoryId].title}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <Container>
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
            {products.map((product, key) => (
              <div
                className="shop-content"
                key={key}
                style={{ width: "18rem" }}
              >
                <div className="product-box">
                  <img
                    className="product-img"
                    src={
                      product?.imageUrl?.Default?.urlDefault ||
                      "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"
                    }
                    alt="Card image cap"
                    onClick={() => handleProductClick(product)}
                  />
                  <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column bd-highlight mb-3">
                      <div className="p-2 bd-highlight">
                        <h5 className="product-title">{product?.title}</h5>
                      </div>
                      <div className="p-2 bd-highlight d-flex justify-content-center">
                        <span className="cart-price" style={{ color: "red" }}>
                          {product?.price?.priceHT || 0} €
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Liste des Produit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.length > 0 ? (
                products.map((product, key) => (
                  <div
                    key={key}
                    className="flex flex-col items-center bg-white p-4 shadow rounded-lg"
                  >
                    <img
                      className="product-img"
                      src={
                        product?.imageUrl?.Default?.urlDefault ||
                        "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"
                      }
                      alt="Card image cap"
                      onClick={() => handleProductClick(product)}
                    />
                    <h3 className="text-lg font-medium">{product.title}</h3>
                    <p className="text-red-600">{product.price.priceHT} €</p>
                  </div>
                ))
              ) : (
          <></>
              )}
            </div>
          </div>
        </Container>
        {isOpen && selectedItem && (
          <ModalItem Item={selectedItem} onClose={handleModalClose} />
        )}
      </div>
    </>
  );
};

export default Categories;
 