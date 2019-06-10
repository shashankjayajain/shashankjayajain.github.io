// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '531912130934'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

/*messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
});*/


//-----------------------------------------------------------------------------------------

/*self.addEventListener('notificationclick', function(event) {
    console.log('On notification click: ', event.notification.data.url);
    // Android doesn’t close the notification when you click on it
    // See: http://crbug.com/463146
    event.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    console.log('Notification click: data.url ', event.notification.data.url);
    event.notification.close();
    var url = /localhost:3999|dev-piquemeup.firebaseapp.com/;
    var newurl = "/chat";
    if (event.notification.data.url) {
        newurl = event.notification.data.url;
    }

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    event.waitUntil(
        clients.matchAll({
            type: 'window'
        })
            .then(function(windowClients) {
                for (var i = 0; i < windowClients.length; i++) {
                    var client = windowClients[i];
                    if (url.test(client.url) && 'focus' in client) {
                        if (endsWith(client.url, "/app.html#" + newurl)) {
                            console.log("******** Yes it matched *******");
                            return client.focus();
                        }
                        return client.navigate("/app.html#" + newurl)
                            .then(client => client.focus());
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow("/app.html#" + newurl);
                }
            })
    );

});*/

//===========================================================================================

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = 'Background Message Title';
    var notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
