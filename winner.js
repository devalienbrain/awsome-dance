const danceButton = document.getElementById('dance');
danceButton.addEventListener('click', function () {
  danceButton.style.display = 'none';

  const imgElement = document.createElement('img');
  imgElement.src = 'dance-img.gif';

  const containerDiv = document.getElementById('container');
  containerDiv.appendChild(imgElement);

  const audioElement = document.createElement('audio');
  audioElement.src = 'music.mp3';
  audioElement.controls = true;
  containerDiv.appendChild(audioElement);
});