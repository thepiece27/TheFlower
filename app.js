onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Show the letter after all flowers have grown (adjust timing as needed)
  setTimeout(function() {
    const letterFrameContainer = document.getElementById('letterFrameContainer');
    if (letterFrameContainer) letterFrameContainer.style.display = 'flex';
  }, 10000); // 3.5s, adjust to match flower animation duration

  // Letter open/fly logic
  const openBtn = document.getElementById('openLetterBtn');
  const envelope = document.getElementById('letterEnvelope');
  const message = document.getElementById('letterMessage');

  if (openBtn && envelope && message) {
    openBtn.addEventListener('click', function() {
      envelope.classList.add('letter-fly');
      openBtn.disabled = true;
      setTimeout(() => {
        envelope.style.display = 'none';
        message.style.display = 'block';
      }, 900);
    });
  }
};