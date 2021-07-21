// Create a reference to the file we want to download
var storageRef = firebase.storage().ref();
var trailsRef = storageRef.child('trails');
var fileName = 'index.html';
var spaceRef = trailsRef.child(fileName);
// File path is 'trails/index.html'
var path = spaceRef.fullPath;
var name = spaceRef.name;
// Points to 'trails'
var trailsRef = spaceRef.parent;

// Get the download URL
storagesRef.fullPath.getDownloadURL()
.then((url) => {
  var indexPage = document.getElementById('trails');
  indexPage.setAttribute('src', url);
})
.catch((error) => {
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/object-not-found':
      // File doesn't exist
      break;
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;
    case 'storage/canceled':
      // User canceled the upload
      break;

    // ...

    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});