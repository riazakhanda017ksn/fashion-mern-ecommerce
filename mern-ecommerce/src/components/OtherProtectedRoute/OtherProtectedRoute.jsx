// import React, { useEffect, useState } from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
// import Payment from "../Payment/Payment";

// const OtherProtectedRoute = () => {
//   const [stripeApiKey, setStripeApiKey] = useState("");

//   async function getStripeApiKey() {
//     const { data } = await axios.get("https://fashion-mern-ecommerce-i28m.vercel.app/stripeApiKey");

//     setStripeApiKey(data.stripeApiKey);
//   }
//   useEffect(() => {
//     getStripeApiKey();
//   }, []);
//   return (
//     <>
//       <Elements stripe={loadStripe(stripeApiKey)}>
//         <Payment />
//       </Elements>
//       ;
//     </>
//   );
// };

// export default OtherProtectedRoute;
