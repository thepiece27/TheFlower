onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Show the letter after all flowers have grown (adjust timing as needed)
  setTimeout(function() {
    const letterFrameContainer = document.getElementById('letterFrameContainer');
    if (letterFrameContainer) letterFrameContainer.style.display = 'flex';
  }, 5000); 

  // Letter open/fly logic
  const openBtn = document.getElementById('openLetterBtn');
  const envelope = document.getElementById('letterEnvelope');
  const letterFrame = document.getElementById('letterFrame');
  const letterPaper = document.getElementById('letterPaper');

  if (openBtn && envelope && letterFrame && letterPaper) {
    openBtn.addEventListener('click', function() {
      envelope.classList.add('letter-fly');
      openBtn.disabled = true;
      setTimeout(() => {
        letterFrame.classList.add('letter-open');
        // Reset animation for letter paper
        letterPaper.style.display = 'block';
        // Restart line animations
        document.querySelectorAll('.paper-line').forEach(line => {
          line.style.animation = 'none';
          // Force reflow
          void line.offsetWidth;
          line.style.animation = '';
        });
      }, 900);
    });
  }
};