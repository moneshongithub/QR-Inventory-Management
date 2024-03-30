import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import QRCode from "qrcode.react"; // Import QRCode component

const QRForm = () => {
  const [component, setComponent] = useState("");
  const [dateReceived, setDateReceived] = useState(new Date());
  const [numItems, setNumItems] = useState(0);
  const [qrData, setQRData] = useState(""); // State to store QR code data

  const generateQR = async () => {
    try {
      const response = await axios.post("http://localhost:5000/inventory", {
        Name: component,
        DateReceived: dateReceived,
        BalanceItems: numItems,
      });
      console.log(response.data);
      // Generate QR code data based on received data
      const qrDataString = `${response.data.Name}, ${response.data.DateReceived}, ${response.data.BalanceItems}`;
      setQRData(qrDataString);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <label htmlFor="component">Select Component:</label>
      <select
        id="component"
        value={component}
        onChange={(e) => setComponent(e.target.value)}
      >
        <option value="">Select</option>
        <option value="C1">C1</option>
        <option value="C2">C2</option>
        <option value="C3">C3</option>
        <option value="C4">C4</option>
        <option value="C5">C5</option>
      </select>
      <label htmlFor="dateReceived">Date Received:</label>
      <DatePicker
        id="dateReceived"
        selected={dateReceived}
        onChange={(date) => setDateReceived(date)}
        dateFormat="MM/dd/yyyy"
      />
      <label htmlFor="numItems">Number of Items Received:</label>
      <input
        type="number"
        id="numItems"
        value={numItems}
        onChange={(e) => setNumItems(e.target.value)}
      />
      <button onClick={generateQR}>Generate QR</button>
      {/* Display QR code if data is available */}
      {qrData && (
        <div>
          <h3>QR Code:</h3>
          <QRCode value={qrData} />
        </div>
      )}
    </div>
  );
};

export default QRForm;
