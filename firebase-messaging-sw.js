importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDdWvSN_lxF9gDrGjNFrG-0pPPKSqPGiQs",
  authDomain: "r4u-tasks.firebaseapp.com",
  projectId: "r4u-tasks",
  storageBucket: "r4u-tasks.firebasestorage.app",
  messagingSenderId: "1056733631698",
  appId: "1:1056733631698:web:1ff1f3a8c7c12d6e18e0ba"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: '/favicon.ico'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
