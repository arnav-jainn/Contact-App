import React from "react";
import Navbar from "./components/Navbar";
import { FaPlusCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {
  const [contact, setContacts] = useState([]);

  useEffect(() => {
    //perform network call

    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapShot = await getDocs(contactsRef); //used to store data
        const contactsList = contactsSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactsList);
      } catch (error) {}
    };

    getContacts();
  }, []);

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-3">
        <div className="relative flex flex-grow items-center">
          <FiSearch className="absolute ml-1 text-3xl text-white" />
          <input
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
          />
        </div>
        <FaPlusCircle className="cursor-pointer text-4xl text-white" />
      </div>
    </div>
  );
};

export default App;
