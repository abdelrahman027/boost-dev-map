import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, y = 28, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -70px 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : `translateY(${y}px)`,
        transition: `opacity 750ms cubic-bezier(.22,1,.36,1) ${delay}ms, transform 750ms cubic-bezier(.22,1,.36,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}