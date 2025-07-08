import React from "react";
import Link from "next/link"; // Import Next.js Link
import { IoIosArrowRoundForward } from "react-icons/io";

type ButtonProps = {
  type?: 'button' | 'submit';
  link?: string;
  title: string;
  icon?: React.ReactNode;
  variant: string;
  full?: boolean;
  disabled?: boolean;
};

const Button = ({ type = 'button', link, title, icon, variant, full }: ButtonProps) => {
  const buttonContent = (
    <>
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      {icon && icon}
    </>
  );

  return link ? (
    <Link href={link} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} hover:opacity-80`}>
      {buttonContent}
    </Link>
  ) : (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} hover:opacity-80`}
      type={type}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
