import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "app/layout";

type ToggleProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, type, ...props }, ref) => {
    const { theme = "", setTheme = () => {} } = useContext(ThemeContext);

    return (
      <label className="inline-flex items-center me-5 cursor-pointer">
        <input
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme === "dark"}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600 dark:peer-checked:bg-teal-600"></div>
        <span className="ms-3 text-sm font-medium text-accent dark:text-gray-300">
          {theme}
        </span>
      </label>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };
