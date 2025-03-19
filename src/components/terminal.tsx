"use client";
import { useState, useEffect, useRef } from "react";
import { CommandCopyButton } from "./commandCopyButton";

const command = "npx simplcms@latest init";
const messages = [
  "",
  "Installing SimplCMS...",
  "Creating admin panel...",
  "Configuring authentication...",
  "SimplCMS has been successfully added to your project!",
  "Your admin panel is now available at /admin",
];

export function SimplCMSDemo() {
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const demoRef = useRef(null);

  // Set up intersection observer to detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the component enters the viewport, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once we've detected it's visible, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        // Start animation when at least 10% of the component is visible
        threshold: 0.1,
      }
    );

    if (demoRef.current) {
      observer.observe(demoRef.current);
    }

    return () => {
      if (demoRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Animation effects only start when component is visible
  useEffect(() => {
    if (!isVisible) return;

    let commandIndex = 0;
    const commandInterval = setInterval(() => {
      if (commandIndex <= command.length) {
        setDisplayedCommand(command.slice(0, commandIndex));
        commandIndex++;
      } else {
        clearInterval(commandInterval);
        animateMessages();
      }
    }, 50);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(commandInterval);
      clearInterval(cursorInterval);
    };
  }, [isVisible]);

  const animateMessages = () => {
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < messages.length) {
        setDisplayedMessages((prev) => [...prev, messages[messageIndex]]);
        messageIndex++;
      } else {
        clearInterval(messageInterval);
      }
    }, 500);
  };

  return (
    <div className="max-w-2xl mx-auto p-4" ref={demoRef}>
      <h2 className="text-2xl font-bold text-center">
        Adding a Headless CMS Has Never Been Easier
      </h2>
      <div className="w-full py-8 justify-center flex">
        {" "}
        <CommandCopyButton command="npx simplcms@latest init" />
      </div>

      <div className="overflow-hidden rounded-lg border shadow-lg">
        {/* Terminal header with macOS-like buttons */}
        <div className="bg-gray-800 px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-sm mx-auto">
            bash ~ simplcms-install
          </div>
        </div>
        {/* Terminal content */}
        <div className="bg-black text-green-400 p-4 font-mono h-72 overflow-y-auto">
          <p className="flex">
            <span className="text-blue-400 mr-2">$</span>
            {displayedCommand}
            {displayedCommand.length === command.length ? null : (
              <span
                className={`ml-0.5 ${showCursor ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            )}
          </p>
          {displayedMessages.map((message, index) => (
            <p key={index} className="mt-2">
              {message}
            </p>
          ))}
          {displayedCommand.length === command.length &&
            displayedMessages.length === messages.length && (
              <p className="flex mt-2">
                <span className="text-blue-400 mr-2">$</span>
                <span
                  className={`ml-0.5 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                >
                  |
                </span>
              </p>
            )}
        </div>
      </div>
      <p className="mt-4 text-center text-muted-foreground">
        With just one command, you can integrate a powerful headless CMS into
        your existing application.
      </p>
    </div>
  );
}
