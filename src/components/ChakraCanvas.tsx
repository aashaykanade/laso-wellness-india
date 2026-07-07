import { useEffect, useRef } from "react";

const ChakraCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let rafId = 0;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      W = wrap.offsetWidth;
      H = wrap.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const chakraDefs = [
      { name: "crown", px: 0.5, py: 0.12, col: "#c084fc", r: 7 },
      { name: "third", px: 0.5, py: 0.2, col: "#818cf8", r: 6 },
      { name: "throat", px: 0.5, py: 0.29, col: "#38bdf8", r: 6 },
      { name: "heart", px: 0.5, py: 0.4, col: "#34d399", r: 8 },
      { name: "solar", px: 0.5, py: 0.51, col: "#fbbf24", r: 6 },
      { name: "sacral", px: 0.5, py: 0.61, col: "#fb923c", r: 6 },
      { name: "root", px: 0.5, py: 0.7, col: "#f87171", r: 6 },
    ];

    const NPART = 55;
    const particles = Array.from({ length: NPART }, () => ({
      t: Math.random(),
      speed: 0.0008 + Math.random() * 0.0014,
      side: Math.random() < 0.5 ? -1 : 1,
      spread: 12 + Math.random() * 28,
      alpha: 0.3 + Math.random() * 0.55,
      size: 1.2 + Math.random() * 2.2,
    }));

    const fieldParticles: Array<{
      chakraIdx: number;
      angle: number;
      angSpeed: number;
      radius: number;
      alpha: number;
      size: number;
    }> = [];
    chakraDefs.forEach((ch, ci) => {
      const n = 6 + Math.floor(Math.random() * 5);
      for (let i = 0; i < n; i++) {
        fieldParticles.push({
          chakraIdx: ci,
          angle: (Math.PI * 2 / n) * i + Math.random() * 0.5,
          angSpeed: (0.008 + Math.random() * 0.012) * (Math.random() < 0.5 ? 1 : -1),
          radius: ch.r * 2.5 + Math.random() * ch.r * 3,
          alpha: 0.2 + Math.random() * 0.35,
          size: 0.8 + Math.random() * 1.4,
        });
      }
    });

    const ripples: Array<{ chakraIdx: number; r: number; maxR: number; alpha: number; speed: number }> = [];
    let lastRipple = 0;
    const spawnRipple = () => {
      const ci = Math.floor(Math.random() * chakraDefs.length);
      ripples.push({ chakraIdx: ci, r: 0, maxR: 28 + Math.random() * 20, alpha: 0.5, speed: 0.4 + Math.random() * 0.3 });
    };

    const getChakraXY = (ch: typeof chakraDefs[0]) => ({ x: ch.px * W, y: ch.py * H });

    const drawBody = () => {
      const topY = chakraDefs[0].py * H;
      const botY = chakraDefs[6].py * H;
      const cx = W * 0.5;
      const grad = ctx.createLinearGradient(cx, topY, cx, botY);
      grad.addColorStop(0, "rgba(192,132,252,0.07)");
      grad.addColorStop(0.35, "rgba(52,211,153,0.09)");
      grad.addColorStop(0.7, "rgba(251,191,36,0.07)");
      grad.addColorStop(1, "rgba(248,113,113,0.06)");
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, (topY + botY) / 2, 18, (botY - topY) / 2 + 10, 0, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    };

    const drawConnections = () => {
      for (let i = 0; i < chakraDefs.length - 1; i++) {
        const a = getChakraXY(chakraDefs[i]);
        const b = getChakraXY(chakraDefs[i + 1]);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        g.addColorStop(0, chakraDefs[i].col + "55");
        g.addColorStop(1, chakraDefs[i + 1].col + "55");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }
    };

    const draw = (ts: number) => {
      ctx.clearRect(0, 0, W, H);

      const bgG = ctx.createRadialGradient(W * 0.5, H * 0.45, 0, W * 0.5, H * 0.45, W * 0.7);
      bgG.addColorStop(0, "#0d0820");
      bgG.addColorStop(0.5, "#070514");
      bgG.addColorStop(1, "#020208");
      ctx.fillStyle = bgG;
      ctx.fillRect(0, 0, W, H);

      ctx.save();
      for (let i = 0; i < 80; i++) {
        const sx = (i * 137.5) % W;
        const sy = (i * 97.3 + 23) % H;
        const sa = 0.08 + ((i * 0.031) % 0.18);
        ctx.beginPath();
        ctx.arc(sx, sy, 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,180,255,${sa})`;
        ctx.fill();
      }
      ctx.restore();

      drawBody();
      drawConnections();

      if (ts - lastRipple > 700 + Math.random() * 600) {
        spawnRipple();
        lastRipple = ts;
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        const ch = chakraDefs[rp.chakraIdx];
        const p = getChakraXY(ch);
        rp.r += rp.speed;
        rp.alpha *= 0.968;
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = ch.col + Math.round(rp.alpha * 255).toString(16).padStart(2, "0");
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.restore();
        if (rp.r > rp.maxR || rp.alpha < 0.02) ripples.splice(i, 1);
      }

      const topY = chakraDefs[0].py * H;
      const botY = chakraDefs[6].py * H;
      const spineH = botY - topY;
      const cx = W * 0.5;

      particles.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t -= 1;
        const py = topY + p.t * spineH;
        const px = cx + Math.sin(p.t * Math.PI * 6) * p.spread * 0.35;

        const segFrac = p.t * (chakraDefs.length - 1);
        const segIdx = Math.floor(segFrac);
        const cA = chakraDefs[Math.min(segIdx, chakraDefs.length - 1)].col;
        const cB = chakraDefs[Math.min(segIdx + 1, chakraDefs.length - 1)].col;

        ctx.save();
        const grad = ctx.createRadialGradient(px, py, 0, px, py, p.size * 2.5);
        grad.addColorStop(0, cA + "ff");
        grad.addColorStop(1, cB + "00");
        ctx.beginPath();
        ctx.arc(px, py, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.globalAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.t * Math.PI * 2));
        ctx.fill();
        ctx.restore();
      });

      fieldParticles.forEach((fp) => {
        fp.angle += fp.angSpeed;
        const ch = chakraDefs[fp.chakraIdx];
        const c = getChakraXY(ch);
        const px = c.x + Math.cos(fp.angle) * fp.radius;
        const py = c.y + Math.sin(fp.angle) * fp.radius * 0.55;
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, fp.size, 0, Math.PI * 2);
        ctx.fillStyle = ch.col;
        ctx.globalAlpha = fp.alpha;
        ctx.fill();
        ctx.restore();
      });

      chakraDefs.forEach((ch, ci) => {
        const p = getChakraXY(ch);
        const pulse = 0.7 + 0.3 * Math.sin(ts * 0.001 * (1 + ci * 0.15) + ci);

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, ch.r * 5 * pulse);
        glow.addColorStop(0, ch.col + "55");
        glow.addColorStop(0.4, ch.col + "22");
        glow.addColorStop(1, ch.col + "00");
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, ch.r * 5 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
        ctx.restore();

        const core = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, ch.r * pulse);
        core.addColorStop(0, "#ffffff");
        core.addColorStop(0.3, ch.col + "ff");
        core.addColorStop(1, ch.col + "00");
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, ch.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = core;
        ctx.fill();
        ctx.restore();
      });

      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default ChakraCanvas;
