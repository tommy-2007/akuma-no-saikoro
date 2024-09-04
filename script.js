function loadAudio() {
  var audio = document.getElementById("myAudio");
  var loadDiv = document.getElementById("load");

  // Attempt to play the audio
  audio.play().then(function() {
    console.log("Audio started playing.");
    loadDiv.style.opacity = "0"; // Fade out the loading screen
    setTimeout(function() {
      loadDiv.style.display = "none"; // Hide the loading div completely
    }, 500); // Wait for the fade-out transition to complete
  }).catch(function(error) {
    console.log("Autoplay was prevented:", error);
    // Optional: Display a message to the user
  });
}
