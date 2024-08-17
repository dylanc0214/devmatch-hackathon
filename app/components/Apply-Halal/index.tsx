"use client";
import React, { useState } from "react";

const MintTokenModal = ({ onSubmit, onClose }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [to, setTo] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File>();  
  const contractAddress = "0xecaf61C6461C14Dd1104a6C7EfC3de0D211c2093";
  const callbackUrl = "https://devmatch-hackathon.vercel.app/";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ walletAddress, to, name, description, file, contractAddress, callbackUrl });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Apply for Halal</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="walletAddress" className="block mb-2">
              DIC Address
            </label>
            <input
              type="text"
              id="walletAddress"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="to" className="block mb-2">
              Government Address
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block mb-2">
              File
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4 hidden">
            <label htmlFor="contractAddress" className="block mb-2">
              Contract Address
            </label>
            <input
              type="text"
              id="contractAddress"
              value={contractAddress}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4 hidden">
            <label htmlFor="callbackUrl" className="block mb-2">
              Callback URL
            </label>
            <input
              type="text"
              id="callbackUrl"
              value={callbackUrl}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MintTokenModal;
