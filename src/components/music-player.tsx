import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import ReactPlayer from "react-player";

type MusicPlayerProps = {
  src: string;
  coverImage?: string;
  trackTitle?: string;
  artist?: string;
  className?: string;
  isPlaying: boolean;

  onPrev?: () => void;
  onNext?: () => void;
};

type AudioOnlyPlayerProps = {
  url: string;
  isPlaying: boolean;
};

export const AudioOnlyPlayer: React.FC<AudioOnlyPlayerProps> = ({
  url,
  isPlaying,
}) => {
  return (
    <div style={{ width: 0, height: 0, overflow: "hidden", opacity: 0 }}>
      <ReactPlayer
        src={url}
        playing={isPlaying}
        width="0"
        height="0"
        controls={false}
        playsInline
      />
    </div>
  );
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  src,
  coverImage,
  trackTitle = "Track Title",
  artist = "Artist Name",
  className,
  isPlaying,
  onPrev,
  onNext,
}) => {
  return (
    <div
      className={cn(
        "relative inset-0 flex h-full w-full items-center justify-center overflow-hidden",
        className
      )}
    >
      <style jsx>
        {`
          @keyframes vinyl-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes glossy-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }

          @keyframes audio-bar {
            0%,
            100% {
              height: 24px;
            }
            50% {
              height: 12px;
            }
          }

          .vinyl-record {
            will-change: transform;
            transform: translate3d(0, 0, 0);
          }

          .vinyl-record.playing {
            animation: vinyl-spin 4.5s linear infinite;
          }

          .glossy-effect {
            will-change: transform;
            transform: translate3d(0, 0, 0);
          }

          .glossy-effect.playing {
            animation: glossy-spin 8s linear infinite;
          }

          .audio-bar {
            will-change: height;
            transform: translate3d(0, 0, 0);
          }

          .audio-bar-1 {
            animation: audio-bar 0.8s ease-in-out infinite;
          }

          .audio-bar-2 {
            animation: audio-bar 0.8s ease-in-out 0.15s infinite;
          }

          .audio-bar-3 {
            animation: audio-bar 0.8s ease-in-out 0.3s infinite;
          }

          /* Mobile optimizations */
          @media (max-width: 640px) {
            .vinyl-record,
            .glossy-effect,
            .audio-bar {
              transform: translate3d(0, 0, 0);
            }
          }
        `}
      </style>

      <div className="absolute inset-0 size-full before:absolute before:inset-0 before:z-10 before:size-full before:bg-black/20 before:backdrop-blur-sm">
        {coverImage && (
          <img
            src={coverImage}
            alt="music cover"
            className="h-full w-full scale-110 object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <div className="relative z-40 flex items-center justify-center">
        <motion.div
          className="relative flex items-center"
          initial={false}
          animate={{
            gap: isPlaying ? "0px" : "0px",
          }}
        >
          <motion.div
            initial={{ x: 0, scale: 0.9, opacity: 0 }}
            animate={{
              x: isPlaying ? -50 : 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{
              x: {
                type: "spring",
                stiffness: 100,
                damping: 20,
              },
              scale: { duration: 0.6, ease: "easeOut" },
              opacity: { duration: 0.6 },
            }}
            className="relative z-30 size-44 overflow-hidden rounded-lg bg-black shadow-2xl max-sm:size-40"
            style={{
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.8), 0 0 120px rgba(255,125,0,0.1)",
            }}
          >
            {coverImage && (
              <img
                src={coverImage}
                alt={trackTitle}
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/90 to-transparent p-4">
              <h3 className="truncate text-sm font-semibold text-white">
                {trackTitle}
              </h3>
              <p className="truncate text-xs text-white/70">{artist}</p>
            </div>

            <button
              onClick={onPrev}
              className="flex-center absolute top-1/2 left-[calc(50%-50px)] z-50 size-10 rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/80 max-sm:size-8"
              style={{
                willChange: "transform",
                transform: "translate3d(-50%, -50%, 0)",
              }}
              aria-label="Previous Track"
            >
              <SkipBack size={20} />
            </button>

            <button
              className="flex-center absolute top-1/2 left-1/2 z-50 size-12 rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/80 max-sm:size-10"
              style={{
                willChange: "transform",
                transform: "translate3d(-50%, -50%, 0)",
              }}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div
                    key="pause"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Pause size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="play"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play size={24} className="ml-0.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={onNext}
              className="flex-center absolute top-1/2 left-[calc(50%+50px)] z-50 size-10 rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/80 max-sm:size-8"
              style={{
                willChange: "transform",
                transform: "translate3d(-50%, -50%, 0)",
              }}
              aria-label="Next Track"
            >
              <SkipForward size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ x: 0, scale: 0.95, opacity: 0.8 }}
            animate={{
              x: isPlaying ? 60 : 0,
              scale: isPlaying ? 1 : 0.95,
              opacity: isPlaying ? 1 : 0.8,
            }}
            transition={{
              x: {
                type: "spring",
                stiffness: 100,
                damping: 20,
              },
              scale: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.6,
              },
              opacity: {
                duration: 0.4,
              },
            }}
            className={cn(
              "vinyl-record absolute left-0 z-20 size-40 max-sm:size-36",
              "rounded-full",
              "bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#0e0e0e_58%,#050505_100%)]",
              "border border-white/10",
              isPlaying && "playing"
            )}
            style={{
              transformOrigin: "center",
              willChange: isPlaying ? "transform" : "auto",
              boxShadow:
                "inset 0 0 28px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.65)",
            }}
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-0 rounded-full opacity-90 mix-blend-overlay",
                "bg-[repeating-radial-gradient(circle_at_50%_50%,white_1px,white_1px,rgba(0,0,0,0)_2px,rgba(0,0,0,0)_15px)]"
              )}
            />

            <div
              className={cn(
                "glossy-effect pointer-events-none absolute inset-0",
                "bg-[linear-gradient(105deg,rgba(255,255,255,0.0)_20%,rgba(255,255,255,0.085)_48%,rgba(255,255,255,0.0)_72%)]",
                "rounded-full",
                isPlaying && "playing"
              )}
              style={{
                transformOrigin: "center",
                willChange: isPlaying ? "transform" : "auto",
              }}
            />

            <div
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "h-[34%] w-[34%] rounded-full",
                "bg-[radial-gradient(circle,#ff9b19_0%,#ff7c00_55%,#ff6200_100%)]",
                "flex items-center justify-center overflow-hidden"
              )}
              style={{
                boxShadow:
                  "inset 0 8px 18px rgba(0,0,0,0.35), 0 2px 0 rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-center text-[8px] font-bold tracking-wider text-white/90 uppercase">
                {artist.split(" ").slice(0, 2).join(" ")}
              </p>
            </div>

            <div
              className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/90"
              style={{
                boxShadow: "0 0 0 2px rgba(0,0,0,0.35)",
              }}
            />

            <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/10 via-transparent to-black/20" />
          </motion.div>
        </motion.div>
      </div>

      <AudioOnlyPlayer isPlaying={isPlaying} url={src} />
    </div>
  );
};

export default MusicPlayer;
