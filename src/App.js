// src/App.js
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase/config';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <div className="app">
      <Navbar user={user} onSignOut={handleSignOut} />
      
      <div className="main-content">
        {user ? <Dashboard user={user} /> : <AuthForm />}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;