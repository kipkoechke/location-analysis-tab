"use client";
import clsx from "clsx"; // Optional: Use clsx for cleaner class merging
import { createContext, ReactNode, useContext, useState } from "react";

type TabsContextType = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

type TabsProps = {
  defaultValue: string;
  children: ReactNode;
  className?: string;
};

export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={clsx("tabs", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

type TabsListProps = {
  children: ReactNode;
  className?: string;
};

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      className={clsx(
        "tabs-list flex overflow-x-auto flex-wrap gap-2 md:gap-4 justify-start",
        className
      )}
    >
      {children}
    </div>
  );
}

type TabsTriggerProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }

  const { value: activeValue, setValue } = context;

  return (
    <button
      className={clsx(
        "tabs-trigger px-4 py-2 rounded",
        activeValue === value
          ? "text-primary font-bold"
          : "text-tertiary hover:text-primary hover:cursor-pointer",
        className
      )}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  );
}

type TabsContentProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export function TabsContent({ value, children, className }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }

  const { value: activeValue } = context;

  return activeValue === value ? (
    <div className={clsx("tabs-content mt-4", className)}>{children}</div>
  ) : null;
}
