import React from "react";

import FaqText from "./FaqText";

const data = [
  {
    title: "How does it work",
    description: `The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."`,
  },
  {
    title: "How to start with Stacks",
    description: `The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."`,
  },
  {
    title: "Dose it suppport Dark Mode",
    description: `The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."`,
  },
  {
    title: "Does it support Auto-Layout",
    description: `The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."`,
  },
  {
    title: "What is Stacks Design System",
    description: `The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."`,
  },
];

function FaqComp() {
  return (
    <div className="wow fadeInUp pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="p-2 rounded">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4 text-sm">
              <div className="text-3xl lg:text-6xl">
                Frequently asked <span class="font-medium">Questions</span>
              </div>
              <div className="my-2 text-xl">Wondering how our service works ?</div>
              <div className="mb-2 text-xl">
                Confused about how we can improve your business ?
              </div>
              <div className="text-sm text-gray-600">
                Dive into our FAQ for more details
              </div>
            </div>
            <div className="md:w-2/3 md:ml-5">
              <div className="p-4">
                {data.map((e, index) => (
                  <FaqText key={index} data={e} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqComp;
