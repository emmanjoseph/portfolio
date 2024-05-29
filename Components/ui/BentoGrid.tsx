'use client';
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
// import { Globe } from "./Globe";
import GridGlobe from "./GridGlobe";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('emmajoseph607@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 p-2",
        className
      )}
      style={{
        background:'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(77,77,133,1) 58%, rgba(0,212,255,1) 100%)'
      }}
    >
      {img && (
        <div className="w-full h-full absolute">
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover object-center w-full h-full")}
          />
        </div>
      )}
      {spareImg && id === 5 && (
        <div className="absolute right-0 -bottom-5 w-full opacity-80">
          <img
            src={spareImg}
            alt={spareImg}
            className={cn(imgClassName, "object-cover object-center w-full h-full")}
          />
        </div>
      )}
      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
        </BackgroundGradientAnimation>
      )}

      <div className={cn(
        titleClassName,
        'group-hover/bento translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base">
          {description}
        </div>
        <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
          {title}
        </div>
        {id === 2 && <GridGlobe />}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-1 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              {["HTML5 and CSS", "JavaScript", "React", "Tailwind"].map((item) => (
                <span
                  key={item}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              {["Tailwind", "MUI", "Next.js", "Tailwind"].map((item) => (
                <span
                  key={item}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {id === 6 && (
          <div className="mt-5 relative z-10">
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
    </div>
  );
};
