import React from "react";
import Modal from "./3Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup"; 

// const contactSchemaValidation = Yup.object().shape({
//   Name: Yup.string().required("Name is Required"),
//   Phone: Yup.string().required("Phone is Required"),
//   Email: Yup.string().email("Invalid Email").required("Email is Required"),
// });

const AddUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          // validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  Name: contact.Name,
                  Phone: contact.Phone,
                  Email: contact.Email,
                }
               :{
                  Name: " ",
                  Phone: " ",
                  Email: " ",
                }
          }
          onSubmit={(values) => {
            console.log("Form submitted: ",values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="Name">Name:</label>
              <Field name="Name" className="h-10 border" placeholder=" Enter Name"/>
              {/* <div className="text-xs text-red-700">
                <ErrorMessage name="Name" />
              </div> */}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Phone">Phone:</label>
              <Field name="Phone" className="h-10 border" placeholder=" Enter Phone Number"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Email">Email:</label>
              <Field name="Email" className="h-10 border" placeholder=" Enter Email"/>
            </div>

            <button type="submit" className="bg-orange self-end border px-3 py-1.5">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
            
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddUpdateContact;
