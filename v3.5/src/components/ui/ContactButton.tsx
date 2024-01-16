import { cn } from "@/libs/utils";
import Text from "../ui/Text";
import styles from "./ContactButton.module.css";

export default function ContactButton(props: { className?: string }) {
  const { className } = props;
  return (
    <div
      className={cn(
        className,
        "relative flex h-14  w-min cursor-pointer rounded-[70px] border-[1px] border-[#222222] transition-all duration-300 ease-in-out will-change-contents",
      )}
    >
      <>
        <a
          href={"mailto: dan.ditomaso@gmail.com"}
          referrerPolicy="strict-origin-when-cross-origin"
          className={cn(styles.button, "flex place-items-center px-9 ")}
        >
          <>
            <Text variant="p">dan.ditomaso@gmail.com</Text>
            {/* <div className="none absolute flex h-full w-full place-content-center place-items-center rounded-[70px] bg-black text-white opacity-0 transform-gpu">
              <Text variant="p">Let's connect</Text>
            </div> */}
          </>
        </a>
      </>
    </div>
  );
}
