import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  phone: Yup.string().required("Phone is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    console.log('Adding contact:', contact); // Add this line
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
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.Name,
                  phone: contact.Phone,
                  email: contact.Email,
                }
              : {
                  name: "",
                  phone: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="Name">Name:</label>
              <Field name="Name" className="h-10 border" />
              <div className="text-xs text-red-700">
                <ErrorMessage name="Name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Phone">Phone:</label>
              <Field name="Phone" className="h-10 border" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Email">Email:</label>
              <Field name="Email" className="h-10 border" />
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
