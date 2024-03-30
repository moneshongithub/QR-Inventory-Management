// // src/components/QRScanner.js
// import React, { useState } from "react";
// import QrReader from "react-qr-reader";
// import axios from "axios";

// const QRScanner = () => {
//   const [scanResult, setScanResult] = useState(null);

//   const handleScan = async (data) => {
//     if (data) {
//       try {
//         const response = await axios.get(`/inventory/${data}`);
//         setScanResult(response.data);
//         // Update database to subtract scanned item
//       } catch (error) {
//         console.error("Error scanning QR code:", error);
//         setScanResult({ error: "Invalid or non-existent QR code" });
//       }
//     }
//   };

//   const handleError = (error) => {
//     console.error("QR scanner error:", error);
//   };

//   return (
//     <div>
//       <h2>QR Code Scanner</h2>
//       <QrReader
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: "100%" }}
//       />
//       {scanResult && (
//         <div>
//           {scanResult.error ? (
//             <p>{scanResult.error}</p>
//           ) : (
//             <div>
//               <p>Name: {scanResult.Name}</p>
//               <p>Date Received: {scanResult.DateReceived}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QRScanner;
