export const navSlide = {
  initial: { y: 'calc(100% + 200px)', opacity: 0 },
  enter: {
    y: '0',
    opacity: [0, 0, 1],
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: 'calc(100% + 200px)',
    transition: { duration: 0.6, opacity: 0, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { y: 40 },
  enter: (i) => ({
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.075 * i },
  }),
  exit: (i) => ({
    y: 40,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

export const menuBtnAni = {
  initial: {
    rotate: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  animate: {
    rotate: -360,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};
