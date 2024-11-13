// lib/User.js
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config';

class User {
  constructor(uid) {
    this.uid = uid;
  }

  async getUserData() {
    try {
      const userRef = doc(db, 'users', this.uid); // Updated for Firestore modular syntax
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        throw new Error('No such user!');
      }

      return docSnap.data();
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }
}

export default User;
