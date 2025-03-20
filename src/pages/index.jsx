import Logo from "@/components/home/Logo";
import Navbar from "@/components/home/Navbar";
import AboutUs from "@/components/home/AboutUs";
import Events from "@/components/home/Events";
import { useEffect, useState } from "react";
import useIntersectionObserver from "@/libs/intersection-observer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customToastStyle = `
    .custom-toast {
        background-color: #eae8fc;
        color: #1c0f4a;
        font-weight: 600;
        font-size: 18px;
        font-family: 'League Spartan', sans-serif;
        padding: 18px;
        padding-bottom: 15px;
    }
`;

export default function Home() {
  const [color, setColor] = useState("");
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.5 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.5 });
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = customToastStyle;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    if (isVisible1) {
      setColor("#c4c1f7");
    } else if (isVisible2) {
      setColor(() => "#ffffff");
    } else if (isVisible3) {
      setColor("#c4c1f7");
    }
  }, [isVisible1, isVisible2, isVisible3]);

  const notify = () => {
    toast("🔍 Research Et Al", {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className: "custom-toast",
    });
  };

  useEffect(() => {
    notify();
  }, []);

  return (
    <div className="App relative min-h-screen bg-gradient-to-b from-[#1c0f4a] to-[#3b2f7d]">
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <Navbar color={color} className="sticky top-0 z-50" />
      <div className="snap-y snap-mandatory overflow-y-scroll h-[calc(100vh-0px)] z-0">
        <div className="snap-always snap-center min-h-screen flex items-center justify-center" ref={ref1}>
          <Logo />
        </div>
        <div className="snap-always snap-center min-h-screen flex items-center justify-center" ref={ref2}>
          <AboutUs />
        </div>
        <div className="snap-always snap-center min-h-screen flex items-center justify-center" ref={ref3}>
          <Events />
        </div>
      </div>
    </div>
  );
}
