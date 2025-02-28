document.addEventListener("DOMContentLoaded", () => {
    const petalsContainer = document.getElementById("petals-container")
    const celebrateButton = document.querySelector(".celebrate-button")
  
    // Create initial rose petals
    createPetals(100)
  
    // Add more petals when celebrate button is clicked
    celebrateButton.addEventListener("click", function () {
      createPetals(50)
      createConfetti(500)

      // Add a little celebration effect
      this.textContent = "🎉 Hooray! 🎉"
      setTimeout(() => {
        this.textContent = "🎂 Celebrate! 🎉"
      }, 2000)
    })

    function createConfetti(count) {
        const colors = ["#f2d74e", "#95c3de", "#ff9a9a", "#a9e66e", "#f79cd4"]
    
        for (let i = 0; i < count; i++) {
          const confetti = document.createElement("div")
          confetti.classList.add("confetti")
    
          const size = Math.random() * 10 + 5 // Size between 5-15px
          const color = colors[Math.floor(Math.random() * colors.length)]
          const startPositionX = Math.random() * 100 // Start X position from 0-100%
          const animationDuration = Math.random() * 3 + 2 // Duration between 2-5s
    
          confetti.style.width = `${size}px`
          confetti.style.height = `${size}px`
          confetti.style.backgroundColor = color
          confetti.style.left = `${startPositionX}%`
          confetti.style.top = "-20px"
          confetti.style.animation = `confetti-fall ${animationDuration}s linear forwards`
    
          document.body.appendChild(confetti)
    
          // Remove confetti after animation
          setTimeout(() => {
            confetti.remove()
          }, animationDuration * 1000)
        }
      }
  
    function createPetals(count) {
      for (let i = 0; i < count; i++) {
        const petal = document.createElement("div")
        petal.classList.add("petal")
  
        // Randomize petal properties
        const size = Math.random() * 30 + 20 // Size between 20-50px
        const startPositionX = Math.random() * 100 // Start X position from 0-100%
        const startPositionY = Math.random() * 100 // Start Y position from 0-100%
        const animationDuration = Math.random() * 10 + 15 // Duration between 15-25s
        const animationDelay = Math.random() * 10 // Delay between 0-10s
        const opacity = Math.random() * 0.6 + 0.2 // Opacity between 0.2-0.8
  
        // Apply styles
        petal.style.width = `${size}px`
        petal.style.height = `${size}px`
        petal.style.left = `${startPositionX}%`
        petal.style.top = `${startPositionY}%`
        petal.style.animation = `float ${animationDuration}s linear ${animationDelay}s infinite`
        petal.style.opacity = opacity
  
        // Add to container
        petalsContainer.appendChild(petal)
  
        // Remove petal after animation to prevent memory issues
        setTimeout(
          () => {
            petal.remove()
          },
          (animationDuration + animationDelay) * 1000,
        )
      }
    }
  })
  
  