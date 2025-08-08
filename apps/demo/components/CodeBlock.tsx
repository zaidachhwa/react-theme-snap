import React from "react";

const CodeBlock: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
  return (
    <pre className="bg-zinc-900 dark:bg-stone-700 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
      {children}
    </pre>
  );
};

export default CodeBlock;
