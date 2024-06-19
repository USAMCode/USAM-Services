export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-200%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };
  export const rotateIn = (delay, duration) => {
    return {
      hidden: {
        rotate: 90,
        opacity: 0,
      },
      show: {
        rotate: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const bounceIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0.5,
        opacity: 0,
      },
      show: {
        scale: [1.2, 0.9, 1.1, 1],
        opacity: 1,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
          stiffness: 300,
        },
      },
    };
  };
  
  export const flipIn = (delay, duration) => {
    return {
      hidden: {
        rotateY: 90,
        opacity: 0,
      },
      show: {
        rotateY: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  export const fadeScaleIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0.8,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
        },
      },
    };
  };
  
  export const slideRotateIn = (direction, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        rotate: 45,
        opacity: 0,
      },
      show: {
        x: 0,
        rotate: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const swingIn = (delay, duration) => {
    return {
      hidden: {
        rotate: -45,
        opacity: 0,
      },
      show: {
        rotate: [0, 15, -15, 15, 0],
        opacity: 1,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
        },
      },
    };
  };
  
  export const shakeIn = (delay, duration) => {
    return {
      hidden: {
        x: -10,
        opacity: 0,
      },
      show: {
        x: [10, -10, 10, -10, 0],
        opacity: 1,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
          stiffness: 100,
        },
      },
    };
  };