import { cn } from "cn";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `overflow-hidden rounded-[24px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)]`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export const cardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn(`p-2`, className)}>{children}</div>;
};

export const CardHeader = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn(`p-6  pb-4`, className)}>{children}</div>;
};
export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn(`p-6 pt-5`, className)}>{children}</div>;
};

export const CardInsideSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn(`h-80   rounded-md `, className)}>{children}</div>;
};

export const Pattern = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200`,
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:4px_4px]" />
      <div className="relative">{children}</div>
    </div>
  );
};
