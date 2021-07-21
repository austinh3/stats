function refStorageFull() {
    var storageRef = firebase.storage().ref();
    var trailsRef = storageRef.child('trails');
    var fileName = 'index.html';
    var spaceRef = trailsRef.child(fileName);
   // File path is 'trails/index.html'
   var path = spaceRef.fullPath;
   var name = spaceRef.name;
   // Points to 'trails'
   var trailsRef = spaceRef.parent;
 }