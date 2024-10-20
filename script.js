let color;

function changeBgColor() {
  // Hexadecimal characters: 0-9 and A-F
  const hexChars = '0123456789ABCDEF';
  color = '#';

  // Generate a 6-character hex color code
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * hexChars.length)];
  }

  // Apply the random color to the background
  document.body.style.backgroundColor = color;

  // Update the result text with the new color
  let result = document.getElementById('result');
  result.innerHTML = `<p>Hex Code</p><br><b>${color}</b>`;
}

// Add event listener to the button
document.getElementById('randomBtn').addEventListener('click', changeBgColor);