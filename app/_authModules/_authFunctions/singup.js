import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { db } from "../config";
import { doc, collection, setDoc } from "firebase/firestore"; 
import { set } from "firebase/database";

const auth = getAuth(firebase_app);

export async function partnerSignUp(email, password, phoneNum, name) {
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
            phoneNum: phoneNum,
            apps: [],
            joinedApps: [],
            role: "partner"
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

export async function userSignUp(email, password, phoneNum, name) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // The user has been created, now we can store additional user data in Firestore
            const user = userCredential.user;
            setDoc(doc(collection(db, "users"), user.uid), {
            name: name,
            phoneNum: phoneNum,
            email: email,
            joinedApps: [],
            role: "user"
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