"use client";

import clsx from "clsx";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type TabsContextType = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

type TabsProps = {
  defaultValue: string;
  children: ReactNode;
  className?: string;
  onValueChange?: (value: string) => void;
};

export function Tabs({
  defaultValue,
  children,
  className,
  onValueChange,
}: TabsProps) {
  const [value, setValue] = useState(defaultValue);

  // Call onValueChange when value changes
  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [value, onValueChange]);

  // A wrapper for setValue to handle both internal state and callback
  const handleSetValue = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, setValue: handleSetValue }}>
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
          ? "text-secondary font-bold bg-primary"
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
