"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "john",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best ai application I've ever used!",
  },
  {
    name: "tony",
    avatar: "T",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Harry",
    avatar: "H",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
];
const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10 ">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-400 ring mr-2 rounded-full">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
