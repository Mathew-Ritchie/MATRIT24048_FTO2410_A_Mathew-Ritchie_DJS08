import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans.jsx";
import VanDetail from "./pages/VanDetail";
import Dashboard from "./pages/host/Dashboard.jsx";
import Income from "./pages/host/Income.jsx";
import Reviews from "./pages/host/Reviews.jsx";
import Layout from "./components/Layout.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans from "./pages/host/HostVans.jsx";
import HostVansDetail from "./pages/host/HostVansDetail.jsx";
import HostVanInfo from "./pages/host/HostVanInfo.jsx";
import HostVanPhotos from "./pages/host/HostVanPhotos.jsx";
import HostVanPricing from "./pages/host/HostVanPricing.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import "./server";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photo" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
