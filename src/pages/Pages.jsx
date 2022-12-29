import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import Home from "./Home";
import Developers from "./Developers";
import Area from "./Area";
import Category from "./Category";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Detail from "./Detail";
import CategoryList from "../components/CategoryList";
import AreaList from "../components/AreaList";
import ResultSearch from "./ResultSearch";


const Pages = () => {
  const query = useSelector((state) => state.recipeReducer.recipeName);

  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />

        <>
          {search.length > 0 ? (
            <ResultSearch query={query} search={search} />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/categories" element={<CategoryList />} />
              <Route path="/categories/:categoryName" element={<Category />} />
              <Route path="/areas" element={<AreaList />} />
              <Route path="/areas/:areaName" element={<Area />} />
              <Route path="/detail/:id" element={<Detail />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          )}
        </>
      
      <Footer />
    </>
  );
};

export default Pages;
