import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import './App.css'; 
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'; 
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'; 
import { getAnalytics } from "firebase/analytics";

// Firebase Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app); 
const analytics = getAnalytics(app); 

function App() {
  const [library, setLibrary] = useState([]); 
  const [wishlist, setWishlist] = useState([]); 
  const [readList, setReadList] = useState([]); 
  const [activeView, setActiveView] = useState('library'); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredBooks, setFilteredBooks] = useState([]); 
  const [user, setUser] = useState(null); 

  const apiKey = import.meta.env.VITE_API_KEY;

  // Sign-In Function
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
  
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('User signed in:', user); 
        setUser(user); 
      })
      .catch((error) => {
        console.error('Error signing in:', error); 
      });
  };

  // Sign-Out Function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out'); 
        setUser(null); 
      })
      .catch((error) => {
        console.error('Error signing out:', error); 
      });
  };

  // Firebase
  const saveUserData = async (uid) => {
    try {
      const userDocRef = doc(db, 'users', uid);
      await setDoc(userDocRef, { library, wishlist, readList }, { merge: true }); // Use merge to only update the fields
      console.log('User data saved successfully');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  // Firebase
  const fetchUserData = async (uid) => {
    try {
      const userDocRef = doc(db, 'users', uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setLibrary(data.library || []);
        setWishlist(data.wishlist || []);
        setReadList(data.readList || []);
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const addToList = (book, listType) => {
    if (listType === 'library') {
      if (!library.some((b) => b.id === book.id)) {
        setLibrary((prev) => [...prev, book]); 
      }
    } else if (listType === 'wishlist') {
      if (!wishlist.some((b) => b.id === book.id)) {
        setWishlist((prev) => [...prev, book]); 
      }
    } else if (listType === 'readList') {
      if (!readList.some((b) => b.id === book.id)) {
        setReadList((prev) => [...prev, book]); 
      }
    }
  };

  const removeFromList = (bookId, listType) => {
    if (listType === 'library') {
      setLibrary((prev) => prev.filter((book) => book.id !== bookId));
    } else if (listType === 'wishlist') {
      setWishlist((prev) => prev.filter((book) => book.id !== bookId));
    } else if (listType === 'readList') {
      setReadList((prev) => prev.filter((book) => book.id !== bookId));
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredBooks([]);
      return;
    }

    // Google Books API
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=${apiKey}`)
      .then((response) => {
        const books = response.data.items || [];
        setFilteredBooks(
          books.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors || ['Unknown Author'],
            image: item.volumeInfo.imageLinks?.thumbnail,
            description: item.volumeInfo.description || 'No description available.',
          }))
        );
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setFilteredBooks([]);
      });
  };

  const renderView = () => {
    const renderList = (list, listType) => (
      <ul className="book-list">
        {list.map((book) => (
          <li key={book.id} className="book-item">
            <img src={book.image} alt={book.title} />
            <div className="book-info">
              <p><strong>{book.title}</strong></p>
              <p>{book.authors.join(', ')}</p>
            </div>
            <button onClick={() => removeFromList(book.id, listType)}>Remove</button>
          </li>
        ))}
      </ul>
    );

    if (activeView === 'library') {
      return (
        <>
          <h2>My Library</h2>
          {renderList(library, 'library')}
        </>
      );
    } else if (activeView === 'wishlist') {
      return (
        <>
          <h2>Wishlist</h2>
          {renderList(wishlist, 'wishlist')}
        </>
      );
    } else if (activeView === 'readList') {
      return (
        <>
          <h2>Read List</h2>
          {renderList(readList, 'readList')}
        </>
      );
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserData(user.uid); 
    }
  }, [user]);

  useEffect(() => {
    if (user && (library.length > 0 || wishlist.length > 0 || readList.length > 0)) {
      saveUserData(user.uid); 
    }
  }, [library, wishlist, readList, user]);

  return (
    <div className="App">
      <header className="header">
        <div className="title">
          <h1>bookNook</h1>
        </div>
        <div className="view-buttons">
          <button onClick={() => setActiveView('library')}>My Library</button>
          <button onClick={() => setActiveView('wishlist')}>Wishlist</button>
          <button onClick={() => setActiveView('readList')}>Read List</button>
        </div>
        <div className="sign-in-button">
          {user ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <button onClick={handleSignIn}>Sign In</button>
          )}
        </div>
      </header>

      <main>
        {renderView()}

        <div className="search-container">
          <h3>Search Books</h3>
          <input 
            type="text" 
            value={searchTerm} 
            onChange={handleSearch} 
            placeholder="Search for a book..."
          />
        </div>
        <div className="search-results">
          <h3>Search Results</h3>
          {filteredBooks.length > 0 ? (
            <ul className="book-list">
              {filteredBooks.map((book) => (
                <li key={book.id} className="book-item">
                  <img src={book.image} alt={book.title} />
                  <div className="book-info">
                    <p><strong>{book.title}</strong></p>
                    <p>{book.authors.join(', ')}</p>
                  </div>
                  <button onClick={() => addToList(book, activeView)}>Add to {activeView}</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No books found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;