importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCLU4HMbVKE889RFVEAR8oJsgQbtXdVWtc",
  authDomain: "r4u-tasks.firebaseapp.com",
  projectId: "r4u-tasks",
  storageBucket: "r4u-tasks.firebasestorage.app",
  messagingSenderId: "515884696607",
  appId: "1:515884696607:web:67826374308ae0b911412a",
  measurementId: "G-6H5G95BGEK"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background message:', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (clients.openWindow) {
    clients.openWindow('/');
  }
});
