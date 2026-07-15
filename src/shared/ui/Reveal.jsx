import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Yeniden kullanılabilir "scroll ile görünürken belir" sarmalayıcısı.
// Tekrarlanan initial/whileInView/transition bloklarını tek yerde toplar,
// çeşitlilik (variant) ve erişilebilirlik (reduced-motion) sağlar.
//
// Kullanım:
//   <Reveal>...</Reveal>                          // fade-up (varsayılan)
//   <Reveal variant="slide-left" delay={0.1}>...  // soldan kayarak
//   <Reveal variant="stagger">{cards}</Reveal>    // çocukları sırayla belirir (çocuklar <Reveal.Item> olmalı)

const EASE = [0.22, 1, 0.36, 1];

const VARIANTS = {
  'fade-up': { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  'slide-left': { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  'slide-right': { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } },
};

const Reveal = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.7,
  amount = 0.15,
  stagger = 0.12,
  className = '',
  as = 'div',
}) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  // Reduced-motion: hareketi kapat, yalnızca içeriği göster (opaklık korunur)
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  if (variant === 'stagger') {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount }}
        variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      >
        {children}
      </MotionTag>
    );
  }

  const selected = VARIANTS[variant] || VARIANTS['fade-up'];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={selected}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
};

// stagger içindeki tek tek elemanlar için
const Item = ({ children, variant = 'fade-up', duration = 0.6, className = '', as = 'div' }) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const selected = VARIANTS[variant] || VARIANTS['fade-up'];
  return (
    <MotionTag className={className} variants={{ ...selected, show: { ...selected.show, transition: { duration, ease: EASE } } }}>
      {children}
    </MotionTag>
  );
};

Reveal.Item = Item;

export default Reveal;
