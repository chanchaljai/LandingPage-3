gsap.from(".imageContainer", {
  width: "0%",
  duration: 3,
  ease: "expo.easeInOut",
  stagger: 3,
  repeat: -1
});

gsap.timeline({ repeat: -1 })
  .to("#text h1", {
    y: -70,
    duration: 3,
    delay: 3,
    ease: "expo.easeInOut"
  })
  .to("#text h1", {
    y: -140,
    duration: 3,
    ease: "expo.easeInOut"
  });