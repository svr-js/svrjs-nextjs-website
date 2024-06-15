import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-[250px] h-[100vh] border-r dark:border-r-slate-800 pl-4 pt-2">
      <span className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">First use</h2>
        <ul className="pl-4 flex flex-col gap-2">
          <li>System requirements</li>
          <li>Installation</li>
          <li>Features</li>
          <li>SVR.JS files</li>
          <li>SVR.JS utilities</li>
          <li>SVR.JS commands</li>
          <li>Updating SVR.JS</li>
          <li>Common problems</li>
          <li>Bun support</li>
        </ul>
      </span>
    </div>
  );
};

export default Sidebar;
