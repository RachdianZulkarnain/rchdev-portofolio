"use client";

import type { SnakeGameHandle } from "@/components/snake-game";
import env from "@/config/env";
import { siteConfig } from "@/config/site";
import useScreenSize from "@/hooks/use-screen-size";
import { cn, getRandomElement } from "@/lib/utils";
import type { Song } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useIsClient } from "@uidotdev/usehooks";
import axios from "axios";
import chunk from "lodash/chunk";
import { Github, Linkedin } from "lucide-react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { BackgroundNoise } from "../backgrounds";
import { IntroSplash } from "../intro-splash";
import { ThemeToggleButton2 } from "../theme-toggle";
import PlaydateConsole, {
  ActionButtonLabel,
  DpadButtonLabel,
} from "../ui/playdate-console";
import SpeechBubble from "../ui/speech-bubble";
import { Typewriter } from "../ui/typewriter";

const Particles = dynamic(() => import("@/components/ui/particles"), {
  ssr: false,
});

const MusicPlayer = dynamic(() => import("@/components/music-player"), {
  ssr: false,
});

const SnakeGame = dynamic(() => import("@/components/snake-game"), {
  ssr: false,
});

const MotionLink = motion.create(Link);
const menuItems = ["portfolio", "game", "music"] as const;
type MenuItem = (typeof menuItems)[number];
type ConsoleNavigation = "main" | "music" | "play" | "portfolio";

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.5,
      type: "spring",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const slideInBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const socialLinks = [
  { icon: Github, label: "Github", link: `${siteConfig.github}/portfolio` },
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: `${siteConfig.linkedin}/portfolio`,
  },
];

const bgImages: Record<MenuItem, string> = {
  portfolio: "/portofolio.png",
  game: "/game.png",
  music: "/music.png",
};

const MainScreen: React.FC<{
  selectedItem: MenuItem;
  onItemSelect: (item: MenuItem) => void;
}> = ({ selectedItem, onItemSelect }) => (
  <motion.div
    key="main"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="size-full"
  >
    <img
      alt="console-background"
      src="/Background.jpg"
      className="absolute inset-0 size-full object-cover object-center"
    />

    <div className="absolute -bottom-2.5 left-4 z-20 w-65 max-sm:w-50">
      <img src={bgImages[selectedItem]} alt="assist" className="w-full" />
    </div>

    <div className="absolute top-1 right-2 inline-flex flex-col items-start max-md:right-1 max-md:!items-end! max-sm:right-0.5 max-sm:text-xs">
      <SpeechBubble
        className="text-left text-white max-md:self-start"
        bg="transparent"
      >
        {selectedItem === "music" ? (
          "Play a music?"
        ) : selectedItem === "game" ? (
          "Play snake game!"
        ) : (
          <>
            Hi! , I am{" "}
            <Typewriter
              text={["Rachdian", "a web developer"]}
              speed={70}
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
            />
          </>
        )}
      </SpeechBubble>
      <SpeechBubble
        direction="left"
        className="text-white max-sm:max-w-48"
        bg="transparent"
      >
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-2 md:w-48">
          {menuItems.map((item) => (
            <span
              key={item}
              className="inline-flex cursor-pointer items-center gap-0.5"
              onClick={() => onItemSelect(item)}
            >
              {selectedItem === item && (
                <motion.svg
                  fill="#ffffff"
                  className="-mb-0.5 size-4"
                  viewBox="0 0 22 22"
                  xmlns="http://www.w3.org/2000/svg"
                  id="memory-chevron-right"
                  initial={{ x: -10, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: -10, opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <path d="M10 6V5H9V4H7V6H8V7H9V8H10V9H11V10H12V12H11V13H10V14H9V15H8V16H7V18H9V17H10V16H11V15H12V14H13V13H14V12H15V10H14V9H13V8H12V7H11V6" />
                </motion.svg>
              )}
              <span>{item}</span>
            </span>
          ))}
        </div>
      </SpeechBubble>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="dark absolute right-3 bottom-3 z-20"
    >
      <div className="text-foreground/80 space-y-0.5 text-right text-[8px]">
        <div>↑↓ ←→ Navigate</div>
        <div>A: Select • B: Back</div>
        <div className="text-foreground/30 mt-1">V 1.0</div>
      </div>
    </motion.div>
  </motion.div>
);

const HomePage = () => {
  const [currentConsoleNavigation, setCurrentConsoleNavigation] =
    useState<ConsoleNavigation>("main");
  const [selectedItem, setSelectedItem] = useState<MenuItem>("portfolio");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [song, setSong] = useState<Song | null>(null);

  const snakeRef = useRef<SnakeGameHandle | null>(null);
  const consoleRef = useRef<HTMLDivElement | null>(null);

  const isClient = useIsClient();
  const { resolvedTheme, setTheme } = useTheme();
  const screenSize = useScreenSize();
  const router = useRouter();

  const { data: musicPlaylist } = useQuery<Song[]>({
    queryKey: ["music-playlist"],
    queryFn: async () => {
      const res = await axios.get<Song[]>("/data/playlist.json");
      const data = res.data;
      setSong(getRandomElement(data));
      return data;
    },
    gcTime: Infinity,
    staleTime: Infinity,
  });

  const particleColors = useMemo(
    () =>
      resolvedTheme === "dark"
        ? [
            "#BEBB53",
            "#1C2938",
            "#172795",
            "#DE5D4E",
            "#C13567",
            "#10BC89",
            "#3AD47B",
            "#463199",
          ]
        : [
            "#d0c87a",
            "#88a6c9",
            "#8aa1ff",
            "#ff8a78",
            "#d56b96",
            "#2acfa4",
            "#60e09a",
            "#7e6bf2",
          ],
    [resolvedTheme]
  );

  const findMenuItemPosition = useCallback((item: MenuItem) => {
    const menuGrid = chunk(menuItems, 2);

    for (let row = 0; row < menuGrid.length; row++) {
      const col = menuGrid[row].indexOf(item);
      if (col !== -1) return { row, col, grid: menuGrid };
    }

    return null;
  }, []);

  const getNextMenuItem = useCallback(
    (currentItem: MenuItem, direction: DpadButtonLabel): MenuItem | null => {
      const position = findMenuItemPosition(currentItem);
      if (!position) return null;

      const { row, col, grid } = position;

      const navigationMap = {
        right: () => (col + 1 < grid[row].length ? grid[row][col + 1] : null),
        left: () => (col - 1 >= 0 ? grid[row][col - 1] : null),
        up: () =>
          row - 1 >= 0 && col < grid[row - 1].length
            ? grid[row - 1][col]
            : null,
        down: () =>
          row + 1 < grid.length && col < grid[row + 1].length
            ? grid[row + 1][col]
            : null,
      };

      return navigationMap[direction]?.() || null;
    },
    [findMenuItemPosition]
  );

  const handleDpadButtonClick = useCallback(
    (action: DpadButtonLabel) => {
      if (currentConsoleNavigation === "play") {
        snakeRef.current?.handleDpad(action);
        return;
      }

      if (currentConsoleNavigation !== "main") return;

      const nextItem = getNextMenuItem(selectedItem, action);
      if (nextItem) {
        setSelectedItem(nextItem);
      }
    },
    [currentConsoleNavigation, selectedItem, getNextMenuItem]
  );

  const handleActionButtonClick = useCallback(
    (action: ActionButtonLabel) => {
      if (action === "A") {
        if (currentConsoleNavigation === "music") {
          setIsMusicPlaying((prev) => !prev);
          return;
        }

        if (currentConsoleNavigation === "play") {
          snakeRef.current?.restart();
          return;
        }

        const navigationActions: Record<MenuItem, () => void> = {
          music: () => setCurrentConsoleNavigation("music"),
          game: () => setCurrentConsoleNavigation("play"),
          portfolio: () => {
            router.push("/portofolio");
          },
        };

        navigationActions[selectedItem]?.();
        return;
      }

      if (action === "B") {
        if (currentConsoleNavigation === "music" && musicPlaylist) {
          setIsMusicPlaying(false);
          setSong(getRandomElement(musicPlaylist));
        }

        setCurrentConsoleNavigation("main");
      }
    },
    [currentConsoleNavigation, selectedItem, musicPlaylist]
  );

  const renderConsoleScreen = useCallback(() => {
    const screenConfig = {
      music: song && (
        <MusicPlayer
          key={song.url}
          isPlaying={isMusicPlaying}
          src={song.url}
          artist={song.channel || "N/A"}
          trackTitle={song.title}
          coverImage={song.cover}
          className="absolute inset-0"
        />
      ),
      play: <SnakeGame ref={snakeRef} className="absolute inset-0" />,
      portfolio: <IntroSplash />,
      main: (
        <MainScreen
          selectedItem={selectedItem}
          onItemSelect={setSelectedItem}
        />
      ),
    };

    const content = screenConfig[currentConsoleNavigation];

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentConsoleNavigation}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className={cn("size-full", {
            "@container absolute top-0 left-0":
              currentConsoleNavigation === "portfolio",
          })}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    );
  }, [currentConsoleNavigation, selectedItem, song, isMusicPlaying]);

  return (
    <main className="no-scrollbar font-pixelify grid-center border-border text-foreground bg-background relative size-full h-dvh overflow-hidden [--background:white] [--border:var(--color-foreground)] dark:[--background:#0B0B0F] dark:[--border:#F6EAC5] dark:[--foreground:#F6EAC5]">
      <nav className="flex-between absolute top-0 left-0 z-50 w-full gap-4 px-3 py-2.5 md:px-8 md:py-3.5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          transition={{ delay: 0.1 }}
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInRight}
          transition={{ delay: 0.2 }}
        >
          {isClient && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="bg-background border-border/15 dark:hover:border-border inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-sm transition-all duration-300 hover:border-zinc-900/30 max-sm:rounded-lg max-sm:p-2 md:px-3"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), transparent)",
              }}
              aria-label="Toggle theme"
            >
              <ThemeToggleButton2
                className="w-3.5"
                theme={(resolvedTheme as "light" | "dark") || "light"}
              />
            </button>
            
          )}
        </motion.div>
      </nav>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 z-10">
          <Particles
            particleColors={particleColors}
            particleCount={
              screenSize.lessThanOrEqual("md")
                ? 150
                : screenSize.lessThanOrEqual("lg")
                ? 200
                : 300
            }
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6))] opacity-20 mix-blend-multiply dark:bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(0,0,0,0.8))] dark:mix-blend-normal" />

        <div
          className="absolute inset-0 z-0 opacity-100 dark:opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(#F6EAC5 1px, transparent 1px),
              linear-gradient(90deg, #F6EAC5 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <BackgroundNoise
          className="z-20"
          patternSize={300}
          patternRefreshInterval={3}
          patternAlpha={8}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-50"
      >
        <PlaydateConsole
          onDpadButtonClick={handleDpadButtonClick}
          onActionButtionClick={handleActionButtonClick}
          isPlaying={isMusicPlaying}
        >
          <div className="relative size-full overflow-hidden" ref={consoleRef}>
            <BackgroundNoise className="relative z-30" />
            {renderConsoleScreen()}
          </div>
        </PlaydateConsole>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        transition={{ delay: 0.6 }}
        className="absolute bottom-5 left-1/2 z-50 -translate-x-1/2 max-md:hidden"
      >
        <div className="dark:bg-background/30 border-border/15 flex items-center gap-3 rounded-full border px-4 py-1.5 backdrop-blur-md md:gap-4 md:px-6 md:py-2">
          <div className="flex items-center gap-2">
            <div
              className={cn("size-2 animate-pulse rounded-full bg-green-500", {
                "bg-red-500": !env.NEXT_PUBLIC_AVAILABLE_STATUS,
              })}
            />
            <span className="text-xs">
              {env.NEXT_PUBLIC_AVAILABLE_STATUS
                ? "Available for work"
                : "Currently not Available"}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInBottom}
        className="absolute bottom-3 left-3 z-50 md:bottom-5 md:left-5"
      >
        <div className="flex gap-2 md:gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              aria-label={social.label}
            >
              <div
                className="bg-background/60 border-border/15 dark:hover:border-border/30 rounded-lg border p-2 text-lg shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-sm transition-all"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255,255,255,0.08), transparent)",
                }}
              >
                <social.icon size={15} />
              </div>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default HomePage;
