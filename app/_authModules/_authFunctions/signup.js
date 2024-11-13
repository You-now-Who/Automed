import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { db } from "../config";
import { collection, doc, setDoc, query, where, getDocs, getDoc} from "firebase/firestore";

const auth = getAuth(firebase_app);

export async function clinicSignUp(email, password, nic, name) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        ).then((userCredential) => {
          // The user has been created, now we can store additional user data in Firestore
          const user = userCredential.user;
          setDoc(doc(collection(db, "users"), user.uid), {
            email: email,
            name: name,
            nic: nic,
            role: "clinic",
          })
            .then(() => {
              // Add the clinic to the clinics collection
              setDoc(doc(collection(db, "clinics"), user.uid), {
                email: email,
                name: name,
                nic: nic,
                role: "clinic",
                doctors: [],
                clinicCode: user.uid,
              });
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
        });

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
                // Add the doctor to the array of doctors in the clinic document
                const clinicRef = doc(db, "clinics", clinic_code);
                getDoc(clinicRef).then((docSnap) => {
                    if (docSnap.exists()) {
                        const clinicData = docSnap.data();
                        const doctors = clinicData.doctors || [];
                        setDoc(clinicRef, {
                            doctors: [...doctors, user.uid]
                        }, { merge: true })
                        .then(() => {
                            console.log("Doctor added to clinic");
                        })
                        .catch((error) => {
                            console.error("Error adding document: ", error);
                        });
                    } else {
                        console.error("No such clinic!");
                    }
                }).catch((error) => {
                    console.error("Error fetching clinic document: ", error);
                });


                // Search if the clinic exists and console log the result
                async function searchClinic() {
                    const clinicRef = collection(db, "clinics");
                    const q = query(clinicRef, where("clinicCode", "==", clinic_code));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, " => ", doc.data());
                    });
                }

                searchClinic();
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