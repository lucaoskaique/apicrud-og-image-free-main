"use client";
import React, { useState, useEffect } from "react";
import { categoryList } from "./data/category";

import Content from "./_components/Content";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories = categoryList[0].ogImage.flatMap(
    (ogImage) => ogImage.categories
  ); //flatmap is like filter it will combile multiple array in a array
  const categories = Array.from(new Set(allCategories)) || []; // Deduplicate categories

  const filteredOgImages = categoryList[0].ogImage.filter((ogImage) => {
    const categoryMatches =
      !selectedCategory || ogImage.categories.includes(selectedCategory);
    const searchMatches =
      ogImage.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ogImage.categories.some((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return categoryMatches && searchMatches;
  });

  return (
    <div className="bg-white text-black">
      <div className="flex flex-col gap-y-8 justify-center mt-8">
        <h1 className="text-4xl font-semibold text-center pt-8">
          Beautiful Open Graph Static Images With <br />
          Source Codes In Next.js
        </h1>
        <div></div>
        <div className="text-center">
          👉
          <a
            href="https://www.apicrud.com/source-codes/og-image-gallery"
            target="_blank"
            className="underline"
          >
            Download at APIcrud
          </a>
        </div>
      </div>
      <Content ogImages={filteredOgImages} />
    </div>
  );
};

export default Page;
