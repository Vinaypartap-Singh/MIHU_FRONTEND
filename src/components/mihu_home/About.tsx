import {
  Grid,
  MonitorSmartphone,
  Palette,
  Proportions,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../ui/button";
import React from "react";
import Link from "next/link";

interface abooutInfo {
  icon: React.ReactNode;
  title: String;
  description: String;
  btnURL: String;
}

export default function AboutSection() {
  const aboutInfo: abooutInfo[] = [
    {
      icon: <Grid className="size-6 text-blue-500" />,
      title: "Drag & Drop Builder",
      description:
        "Effortlessly customize your website with our intuitive drag-and-drop builder. Move elements around your page, add new sections, and adjust layouts without the need for any technical skills. Building a professional-looking website has never been easier.",
      btnURL: "/",
    },
    {
      icon: <MonitorSmartphone className="size-6 text-blue-500" />,
      title: "Mobile and Desktop Editor",
      description:
        "Work on your website from anywhere, whether you're using a desktop, laptop, or mobile device. Our editor allows you to create, edit, and preview your website on any device, ensuring your design looks flawless across all platforms.",
      btnURL: "/",
    },
    {
      icon: <Palette className="size-6 text-blue-500" />,
      title: "Customizable Themes",
      description:
        "Choose from a wide range of professionally designed templates that suit every style and need. Customize each template to match your brand or personal taste, giving you full control over fonts, colors, and layouts to make it uniquely yours.",
      btnURL: "/",
    },

    {
      icon: <Proportions className="size-6 text-blue-500" />,
      title: "Responsive Design",
      description:
        "Your website will look stunning on any screen size. Whether your visitors are on a phone, tablet, or desktop, our responsive design automatically adjusts to provide the best user experience, ensuring your site always looks its best.",
      btnURL: "/",
    },
    {
      icon: <ShieldCheck className="size-6 text-blue-500" />,
      title: "Built-in Security",
      description:
        "Protect your website and user data with Mihu’s advanced security features, including SSL encryption and automatic updates. Keep your site safe from vulnerabilities and ensure a secure browsing experience for your visitors.",
      btnURL: "/",
    },
    {
      icon: <SearchCheck className="size-6 text-blue-500" />,
      title: "Optimized SEO",
      description:
        "Boost your website's visibility with our built-in SEO tools. From meta tags to content optimization, we help your site rank higher on search engines, driving more traffic and helping you reach a wider audience.",
      btnURL: "/",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font my-16">
        <div className="container max-w-7xl px-5 py-6 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {aboutInfo.map((data, index) => {
              return (
                <div className="p-4 lg:w-1/2 md:w-full" key={index}>
                  <div className="flex shadow-sm hover:shadow-lg transition-all rounded-lg p-8 sm:flex-row flex-col h-full">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 text-blue-500 flex-shrink-0">
                      {data.icon}
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        {data.title}
                      </h2>
                      <p className="leading-relaxed text-sm">
                        {data.description}
                      </p>
                      <Link
                        href={`${data.btnURL}`}
                        className="mt-3 text-sm text-blue-500 inline-flex items-center hover:underline"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
