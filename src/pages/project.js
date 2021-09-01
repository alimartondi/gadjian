import { ViewListIcon, TemplateIcon } from "@heroicons/react/outline";
import React from "react";

export default function Project() {
  return (
    <div className="flex justify-between mt-5">
      <div className="category">
        <button className="h-10 w-10 rounded-lg bg-teal-light text-white items-center mr-2 focus:outline-none">
          <TemplateIcon className="h-6 w-6 m-auto" />
        </button>
        <button className="h-10 w-10 rounded-lg bg-teal text-teal-light items-center focus:outline-none">
          <ViewListIcon className="h-6 w-6 m-auto" />
        </button>
      </div>
      <div className="action">
        <button className="bg-teal-light rounded-lg px-4 py-2 text-white font-medium text-sm focus:outline-none">
          Create project
        </button>
      </div>
    </div>
  );
}
