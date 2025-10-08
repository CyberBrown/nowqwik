import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "../../../media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} alt="Image thunder" />
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <p>Have fun building your App with Qwik.</p>
      <div class={styles["button-group"]}>
        <button
          onClick$={async () => {
            const fallbackColors = [
              "006ce9",
              "ac7ff4",
              "18b6f6",
              "713fc2",
              "ffffff",
            ];

            const resolveConfettiColors = () => {
              if (typeof document === "undefined") {
                return fallbackColors;
              }
              const varNames = [
                "--brand-link",
                "--brand-logo-secondary",
                "--brand-link-soft",
                "--brand-link-alt",
                "--brand-logo-foreground",
              ];
              const style = getComputedStyle(document.documentElement);
              const parsed = varNames
                .map((name) => style.getPropertyValue(name).trim())
                .filter(Boolean)
                .map((value) => {
                  if (value.startsWith("#")) {
                    return value.slice(1);
                  }
                  if (value.startsWith("rgb")) {
                    const channels = value
                      .replace(/[rgba()]/g, "")
                      .split(",")
                      .slice(0, 3)
                      .map((part) => {
                        const channel = Number.parseInt(part.trim(), 10);
                        return Number.isNaN(channel) ? 0 : channel;
                      });
                    if (channels.length === 3) {
                      return channels
                        .map((channel) =>
                          channel.toString(16).padStart(2, "0").toLowerCase(),
                        )
                        .join("");
                    }
                  }
                  return value.replace("#", "");
                });
              return parsed.length ? parsed : fallbackColors;
            };

            const defaults = {
              spread: 360,
              ticks: 70,
              gravity: 0,
              decay: 0.95,
              startVelocity: 30,
              colors: resolveConfettiColors(),
              origin: {
                x: 0.5,
                y: 0.35,
              },
            };

            function loadConfetti() {
              return new Promise<(opts: any) => void>((resolve, reject) => {
                if ((globalThis as any).confetti) {
                  return resolve((globalThis as any).confetti as any);
                }
                const script = document.createElement("script");
                script.src =
                  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                script.onload = () =>
                  resolve((globalThis as any).confetti as any);
                script.onerror = reject;
                document.head.appendChild(script);
                script.remove();
              });
            }

            const confetti = await loadConfetti();

            function shoot() {
              confetti({
                ...defaults,
                particleCount: 80,
                scalar: 1.2,
              });

              confetti({
                ...defaults,
                particleCount: 60,
                scalar: 0.75,
              });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            setTimeout(shoot, 300);
            setTimeout(shoot, 400);
          }}
        >
          Time to celebrate
        </button>
        <a
          href="https://qwik.dev/docs"
          target="_blank"
          class="button button-dark"
        >
          Explore the docs
        </a>
      </div>
    </div>
  );
});
