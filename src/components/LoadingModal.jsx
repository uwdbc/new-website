import React from "react";

const LoadingModal = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center flex-col fixed top-0 left-0 z-50 gap-3 pointer-events-none">
      <svg className="animate-spin w-12 h-12 border-4 border-solid border-gold rounded-full border-b-transparent"></svg>
      Loading...
    </div>
  );
};

export default LoadingModal;
