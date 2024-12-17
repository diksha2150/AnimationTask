gsap.set(".circle", { yPercent: -4 });
gsap.set(".dotsBlue", { yPercent: 11 });
gsap.set(".owlHorned", { yPercent: -21 });
gsap.set(".clusterGreat", { yPercent: 4 });

gsap.to(".circle", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1,
  },
});

gsap.to(".dotsBlue", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1,
  },
});

gsap.to(".owlHorned", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1,
  },
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    end: "bottom center",
    scrub: 1,
  },
});

gsap.to(".clusterGreat", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    end: "bottom center",
    scrub: 1,
  },
});

gsap.set(".triangle", { yPercent: 45, rotation: -90 });
gsap.set(".dotsWhite", { yPercent: 11 });
gsap.set(".owlBurrowing", { yPercent: -21 });
gsap.set(".clusterBurrowing", { yPercent: 4 });

gsap.to(".triangle", {
  yPercent: -5,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1,
  },
});

gsap.to(".dotsWhite", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1,
  },
});

gsap.to(".owlBurrowing", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1,
  },
});

gsap.to(".captionBurrowing", {
  yPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    end: "bottom center",
    scrub: 1,
  },
});

gsap.to(".clusterBurrowing", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    end: "bottom center",
    scrub: 1,
  },
});

gsap.registerPlugin(ScrollTrigger, SplitText);

document.addEventListener("DOMContentLoaded", () => {
  if (typeof SplitText === "undefined") {
    console.error("SplitText plugin is not loaded.");
  } else {
    ``;
    function setupSplits() {
      try {
        var tlSplitGreat = gsap.timeline();
        var SplitGreat = new SplitText(".titleGreathorned", {
          type: "words,chars",
        });
        var charsGreat = SplitGreat.chars;

        tlSplitGreat.from(charsGreat, {
          duration: 0.8,
          opacity: 0,
          y: 10,
          ease: "circ.out",
          stagger: 0.02,
        });

        var tlSplitBurrowing = gsap.timeline();
        var SplitBurrowing = new SplitText(".titleBurrowing", {
          type: "words,chars",
        });
        var charsBurrowing = SplitBurrowing.chars;

        tlSplitBurrowing.from(charsBurrowing, {
          duration: 0.8,
          opacity: 0,
          y: 10,
          ease: "circ.out",
          stagger: 0.02,
          scrollTrigger: {
            trigger: ".titleBurrowing",
            start: "top 75%",
            end: "bottom center",
            scrub: 1,
            markers: true,
          },
        });
      } catch (error) {
        console.error("Error in setupSplits:", error);
      }
    }

    setupSplits();
    ScrollTrigger.refresh();
  }
});
