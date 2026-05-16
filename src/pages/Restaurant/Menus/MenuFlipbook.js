import { useState, useRef, useCallback, useEffect } from "react";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const PAGE_W = 600;
const PAGE_H = 850;
const SWIPE_THRESHOLD = 80;

function MenuFlipbook({ foodPages, winePages }) {
  const allPages = [...foodPages, ...winePages];
  const sectionOf = (i) => (i < foodPages.length ? "Food" : "Wine");

  const [current, setCurrent] = useState(0);
  const [anim, setAnim] = useState(null); // { dir: 1|-1, progress: 0..1 }
  const [dragStart, setDragStart] = useState(null);
  const [dragOfs, setDragOfs] = useState(0);
  const raf = useRef(null);
  const animRaf = useRef(null);
  const bookRef = useRef(null);
  const total = allPages.length;

  useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      if (animRaf.current) cancelAnimationFrame(animRaf.current);
    };
  }, []);

  const flipTo = useCallback(
    (next) => {
      if (anim || next < 0 || next >= total || next === current) return;
      const dir = next > current ? 1 : -1;
      setAnim({ dir, progress: 0 });
      const start = performance.now();
      const dur = 350;

      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        setAnim({ dir, progress: p });
        if (p < 1) animRaf.current = requestAnimationFrame(tick);
        else {
          setAnim(null);
          setCurrent(next);
          setDragOfs(0);
        }
      };
      animRaf.current = requestAnimationFrame(tick);
    },
    [anim, current, total]
  );

  const pointerDown = useCallback(
    (e) => {
      if (anim) return;
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      if (clientX == null) return;
      setDragStart(clientX);
      setDragOfs(0);
    },
    [anim]
  );

  const pointerMove = useCallback(
    (e) => {
      if (dragStart == null) return;
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const clientX = e.clientX ?? e.touches?.[0]?.clientX;
        if (clientX == null) return;
        setDragOfs(clientX - dragStart);
      });
    },
    [dragStart]
  );

  const pointerUp = useCallback(() => {
    if (dragStart == null) return;
    setDragStart(null);
    if (Math.abs(dragOfs) > SWIPE_THRESHOLD) {
      if (dragOfs < 0) flipTo(current + 1);
      else flipTo(current - 1);
    }
    setDragOfs(0);
    if (raf.current) cancelAnimationFrame(raf.current);
  }, [dragStart, dragOfs, current, flipTo]);

  useEffect(() => {
    const el = bookRef.current;
    if (!el) return;
    const prevent = (e) => { if (dragStart != null) e.preventDefault(); };
    el.addEventListener("touchmove", prevent, { passive: false });
    return () => el.removeEventListener("touchmove", prevent);
  }, [dragStart]);

  const translateX = anim ? anim.dir * anim.progress * -300 : dragStart != null ? dragOfs : 0;
  const rotateY = anim
    ? anim.dir * anim.progress * -90
    : dragStart != null
      ? -(dragOfs / PAGE_W) * 60
      : 0;
  const opacity = anim
    ? 1 - anim.progress * 0.15
    : dragStart != null
      ? 1 - Math.abs(dragOfs) / (PAGE_W * 2)
      : 1;
  const nextIdx = anim
    ? current + anim.dir
    : dragStart != null && Math.abs(dragOfs) > 20
      ? (dragOfs < 0 ? current + 1 : current - 1)
      : null;

  const showNext = nextIdx != null && nextIdx >= 0 && nextIdx < total;

  const shadowStyle = anim
    ? `0 ${4 + 20 * anim.progress}px ${8 + 30 * anim.progress}px rgba(0,0,0,${0.2 + 0.3 * anim.progress})`
    : dragStart != null
      ? `0 4px ${8 + Math.abs(dragOfs) * 0.1}px rgba(0,0,0,${0.2 + Math.abs(dragOfs) * 0.001})`
      : "0 4px 8px rgba(0,0,0,0.2)";

  return (
    <MKBox display="flex" flexDirection="column" alignItems="center" sx={{ userSelect: "none" }}>
      <MKBox
        ref={bookRef}
        onMouseDown={pointerDown}
        onMouseMove={pointerMove}
        onMouseUp={pointerUp}
        onMouseLeave={pointerUp}
        onTouchStart={pointerDown}
        onTouchMove={pointerMove}
        onTouchEnd={pointerUp}
        sx={{
          width: PAGE_W,
          height: PAGE_H,
          position: "relative",
          cursor: dragStart != null ? "grabbing" : "grab",
          overflow: "hidden",
          borderRadius: 1,
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          bgcolor: "#111",
          mb: 2,
        }}
      >
        {showNext && (
          <MKBox
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#1C1C1C",
            }}
          >
            <img
              src={allPages[nextIdx]}
              alt={`Page ${nextIdx + 1}`}
              draggable={false}
              style={{
                width: PAGE_W,
                height: PAGE_H,
                objectFit: "contain",
                display: "block",
                userSelect: "none",
                WebkitUserSelect: "none",
                pointerEvents: "none",
              }}
            />
          </MKBox>
        )}

        {Array.from({ length: total }).map((_, i) => {
          if (i === current || i === nextIdx) return null;
          return (
            <MKBox
              key={i}
              sx={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#1C1C1C",
              }}
            >
              <img
                src={allPages[i]}
                alt={`Page ${i + 1}`}
                draggable={false}
                style={{
                  width: PAGE_W,
                  height: PAGE_H,
                  objectFit: "contain",
                  display: "block",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </MKBox>
          );
        })}

        <MKBox
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 6,
            transform: `perspective(1200px) translateX(${translateX}px) rotateY(${rotateY}deg)`,
            transformOrigin: "center center",
            opacity,
            transition: `transform ${anim ? "0" : "0"}s, opacity ${anim ? "0" : "0"}s`,
            boxShadow: shadowStyle,
          }}
        >
          <img
            src={allPages[current]}
            alt={`Page ${current + 1}`}
            draggable={false}
            style={{
              width: PAGE_W,
              height: PAGE_H,
              objectFit: "contain",
              display: "block",
              userSelect: "none",
              WebkitUserSelect: "none",
              pointerEvents: "none",
            }}
          />
        </MKBox>

        {dragStart == null && !anim && (
          <>
            {current > 0 && (
              <MKBox
                onClick={() => flipTo(current - 1)}
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "35%",
                  zIndex: 10,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  pl: 2,
                  opacity: 0,
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 1, background: "linear-gradient(to right, rgba(0,0,0,0.3), transparent)" },
                }}
              >
                <MKTypography variant="h4" color="white" sx={{ textShadow: "0 0 8px rgba(0,0,0,0.6)" }}>
                  ‹
                </MKTypography>
              </MKBox>
            )}
            {current < total - 1 && (
              <MKBox
                onClick={() => flipTo(current + 1)}
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "35%",
                  zIndex: 10,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  pr: 2,
                  opacity: 0,
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 1, background: "linear-gradient(to left, rgba(0,0,0,0.3), transparent)" },
                }}
              >
                <MKTypography variant="h4" color="white" sx={{ textShadow: "0 0 8px rgba(0,0,0,0.6)" }}>
                  ›
                </MKTypography>
              </MKBox>
            )}
          </>
        )}
      </MKBox>

      <MKBox display="flex" alignItems="center" gap={2}>
        <MKBox
          onClick={() => flipTo(current - 1)}
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current > 0 ? "pointer" : "default",
            opacity: current > 0 ? 1 : 0.3,
            bgcolor: "rgba(255,255,255,0.08)",
            "&:hover": current > 0 ? { bgcolor: "rgba(255,255,255,0.18)" } : {},
            color: "#F5F1E8",
            fontSize: "1.3rem",
            fontWeight: "bold",
            userSelect: "none",
            transition: "all 0.2s",
          }}
        >
          ‹
        </MKBox>
        <MKTypography variant="body2" color="#F5F1E8" sx={{ minWidth: 80, textAlign: "center", fontWeight: 500 }}>
          {current + 1} / {total}
        </MKTypography>
        <MKBox
          onClick={() => flipTo(current + 1)}
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current < total - 1 ? "pointer" : "default",
            opacity: current < total - 1 ? 1 : 0.3,
            bgcolor: "rgba(255,255,255,0.08)",
            "&:hover": current < total - 1 ? { bgcolor: "rgba(255,255,255,0.18)" } : {},
            color: "#F5F1E8",
            fontSize: "1.3rem",
            fontWeight: "bold",
            userSelect: "none",
            transition: "all 0.2s",
          }}
        >
          ›
        </MKBox>
      </MKBox>

      <MKTypography variant="caption" color="#C8A96B" sx={{ mt: 1.5, letterSpacing: 1, fontWeight: 600 }}>
        {sectionOf(current) === "Wine" ? "— Wine Menu —" : "— Food Menu —"}
      </MKTypography>
    </MKBox>
  );
}

export default MenuFlipbook;
