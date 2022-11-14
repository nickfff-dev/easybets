import  { FC } from "react";

export interface BackgroundSectionProps {
  className?: string;
}

const BackgroundSection: FC<BackgroundSectionProps> = ({
  className = "bg-neutral-200/50 dark:bg-black/20 ",
}) => {
  return (
    <div
      className={`nc-BackgroundSection absolute inset-y-0 lg:w-[1470px] xl:max-w-[1470px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${className}`}
      data-nc-id="BackgroundSection"
    ></div>
  );
};

export default BackgroundSection;
