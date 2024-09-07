import React from "react";

interface ChangelogLayoutProps {
  children: React.ReactNode;
}

export const ChangelogLayout: React.FC<ChangelogLayoutProps> = ({
  children
}) => {
  return (
    <div className="wrapper container py-24 md:py-28 gap-4 flex flex-col">
      <div className="prose max-w-full prose-lg dark:prose-invert">
        {children}
      </div>
    </div>
  );
};
