import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { db } from "../config";
import { doc, collection, setDoc } from "firebase/firestore"; 
import { set } from "firebase/database";

const auth = getAuth(firebase_app);

export async function clinicSignUp(email, password, nic, name) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // The user has been created, now we can store additional user data in Firestore
            const user = userCredential.user;
            setDoc(doc(collection(db, "users"), user.uid), {
            email: email,
            name: name,
            nic: nic,
            role: "clinic"
            })
            .then(() => {
            })
            .catch((error) => {
            console.error("Error adding document: ", error);
            });
        })

    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function docSignUp(email, password, name, clinic_code) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // The user has been created, now we can store additional user data in Firestore
            const user = userCredential.user;
            setDoc(doc(collection(db, "users"), user.uid), {
            name: name,
            email: email,
            clinic_code: clinic_code,
            role: "doctor"
            })
            .then(() => {
            })
            .catch((error) => {
            console.error("Error adding document: ", error);
            });
        })

    } catch (e) {
        error = e;
    }
    return { result, error };
}