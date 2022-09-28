const firebaseConfig = {
    apiKey: "AIzaSyCn15KFeMan7oqy6kGitjF5AL2OtnU7mFE",
    authDomain: "fakeflix-6cb40.firebaseapp.com",
    projectId: "fakeflix-6cb40",
    storageBucket: "fakeflix-6cb40.appspot.com",
    messagingSenderId: "70921470302",
    appId: "1:70921470302:web:5daf9c0adf1ec5c1490fcf"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();