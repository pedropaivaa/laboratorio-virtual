import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAaBvs084vnbbrjdgIn66OP7rlM2HiriA8",
  authDomain: "laboratorio-virtual-f4f7e.firebaseapp.com",
  projectId: "laboratorio-virtual-f4f7e",
  storageBucket: "laboratorio-virtual-f4f7e.firebasestorage.app",
  messagingSenderId: "286178260670",
  appId: "1:286178260670:web:cf96aebd54ccb9a19390ef"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)