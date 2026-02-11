"use client";

import { useEffect, useState } from "react";

function getTimeInZone(tz: string) {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).formatToParts(now);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const hour = parseInt(get("hour"), 10);
  const minute = parseInt(get("minute"), 10);
  const second = parseInt(get("second"), 10);
  const dayPeriod = get("dayPeriod");

  return { hour, minute, second, dayPeriod };
}

function formatTime(h: number, m: number, s: number, period: string) {
  const hh = String(h).padStart(2, "0");
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return `${hh}:${mm}:${ss} ${period}`;
}

export default function Clock({
  timezone = "America/New_York",
  utcLabel = "UTC -5",
  location = "Boston, MA",
}: {
  timezone?: string;
  utcLabel?: string;
  location?: string;
}) {
  const [time, setTime] = useState<{
    hour: number;
    minute: number;
    second: number;
    dayPeriod: string;
  } | null>(null);

  useEffect(() => {
    setTime(getTimeInZone(timezone));
    const interval = setInterval(() => {
      setTime(getTimeInZone(timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  if (!time) return null;

  const { hour, minute, second, dayPeriod } = time;

  // Convert to degrees for CSS rotation
  const hourDeg = ((hour % 12) + minute / 60) * 30;
  const minuteDeg = (minute + second / 60) * 6;
  const secondDeg = second * 6;

  return (
    <div className="flex w-full items-center justify-between">
      {/* Left: clock + time */}
      <div className="flex items-center gap-3">
        {/* Analog clock face - no border */}
        <div className="relative h-14 w-14 rounded-full sm:h-16 sm:w-16">
          {/* Hour hand */}
          <div
            className="absolute top-1/2 left-1/2 origin-bottom rounded-full"
            style={{
              width: "1.5px",
              height: "20%",
              backgroundColor: "var(--color-muted-foreground)",
              transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`,
            }}
          />
          {/* Minute hand */}
          <div
            className="absolute top-1/2 left-1/2 origin-bottom rounded-full"
            style={{
              width: "1px",
              height: "33%",
              backgroundColor: "color-mix(in srgb, var(--color-muted-foreground) 50%, transparent)",
              transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`,
            }}
          />
          {/* Second hand */}
          <div
            className="absolute top-1/2 left-1/2 origin-bottom rounded-full"
            style={{
              width: "0.4px",
              height: "40%",
              backgroundColor: "var(--color-primary)",
              transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`,
            }}
          />
          {/* Center dot */}
          <div
            className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ backgroundColor: "var(--color-muted-foreground)" }}
          />
        </div>
        {/* Digital time */}
        <span
          className="text-xs"
          style={{ color: "color-mix(in srgb, var(--color-muted-foreground) 70%, transparent)" }}
        >
          ({utcLabel}){" "}
          <span className="font-mono">
            {formatTime(hour, minute, second, dayPeriod)}
          </span>
        </span>
      </div>
      {/* Right: location */}
      <span
        className="text-sm"
        style={{ color: "var(--color-muted-foreground)" }}
      >
        {location}
      </span>
    </div>
  );
}
