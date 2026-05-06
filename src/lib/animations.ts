export const heroEntrance = {
  initial: { opacity: 0, scale: 1.05 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 1.5, ease: "easeInOut" as any },
  viewport: { once: true }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeInOut" as any }
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.2 }
};

export const staggeredItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" as any }
};

export const slowScale = {
  initial: { scale: 0.98 },
  whileInView: { scale: 1 },
  transition: { duration: 1.2, ease: "easeOut" as any }
};

export const leadershipSlide = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" as any }
};

export const contactStagger = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.3 } }
};
