import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth, app, db } from "../firebase";
import { getFirestore, doc, collection, getDoc, setDoc } from "firebase/firestore";

export const authContext = createContext();
export const firestore = getFirestore(app);

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const usuariosCollectionRef = collection(db, "usuarios");

  const login = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const signup = async (email, password, role, name, surname) => {
    const userInfo = await createUserWithEmailAndPassword(auth, email, password, name, surname)
      .then((usuarioFirebase) => {
        return usuarioFirebase;
      });
    console.log(userInfo.user.uid);
    const docuRef = doc(firestore, `usuarios/${userInfo.user.uid}`);
    setDoc(docuRef, { correo: email, rol: role, nombre: name, apellidos: surname });
  };

  const getRol = async (uid) => {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const finalInfo = docuCifrada.data().role;
    return finalInfo;
  }

  const setUserWithFirebaseAndRol = async (usuarioFirebase) => {
    getRol(usuarioFirebase.uid)
      .then((role, name, surname) => {
        const userData = {
          uid: usuarioFirebase.uid,
          email: usuarioFirebase.email,
          rol: role,
          nombre: name,
          apellidos: surname,
        };
        setUser(userData);
        console.log("userData final", userData);
      });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

  const verifyEmail = (email) => sendEmailVerification(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUser(usuarioFirebase);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        login,
        user,
        signup,
        logout,
        loading,
        resetPassword,
        getRol,
        setUserWithFirebaseAndRol,
        verifyEmail,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
