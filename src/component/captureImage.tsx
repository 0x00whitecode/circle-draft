import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 👈 added for navigation

function CaptureImage() {
  const navigate = useNavigate(); // 👈 initialize navigate
  const [images, setImages] = useState({
    front: null,
    right: null,
    back: null,
    left: null,
  });

  const [isLoading, setIsLoading] = useState(false); // 👈 loading state

  // Load from localStorage on mount
  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("uploadedImages"));
    if (savedImages) {
      setImages(savedImages);
    }
  }, []);

  const handleImageUpload = (event, view) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        const updatedImages = { ...images, [view]: base64Image };
        setImages(updatedImages);
        localStorage.setItem("uploadedImages", JSON.stringify(updatedImages));
      };
      reader.readAsDataURL(file);
    }
  };

  const views = [
    { key: "front", label: "Front View" },
    { key: "right", label: "Right View" },
    { key: "back", label: "Back View" },
    { key: "left", label: "Left View" },
  ];

  const allImagesUploaded = Object.values(images).every((image) => image !== null);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("uploadedImages", JSON.stringify(images));
      setIsLoading(false);
      navigate("/circle"); // 👈 redirect after submit
    }, 1500); // simulate delay
  };

  return (
    <div className="absolute justify-center items-center lg:w-6/12 p-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full">
        {/* Upload Buttons */}
        <div className="flex flex-col gap-6 w-full lg:w-[45%]">
          {views.map((view) => (
            <label
              key={view.key}
              className={`cursor-pointer ${
                images[view.key] ? "bg-blue-100 text-blue-800" : "bg-[#F1F4FF] text-[#5A607F]"
              } text-left py-5 px-6 rounded-sm hover:shadow-sm hover:ring-2 ring-red-400 transition-all duration-200 w-full text-sm`}
            >
              {view.label} Capture
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, view.key)}
                className="hidden"
              />
            </label>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-[55%]">
          {views.map((view) => (
            <div
              key={view.key}
              className="relative bg-[#F1F4FF] rounded-sm overflow-hidden shadow-sm aspect-[3/4] flex items-center justify-center"
            >
              {images[view.key] ? (
                <img
                  src={images[view.key]}
                  alt={`${view.label}`}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-sm text-gray-400">No image uploaded</span>
              )}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-extralight py-1 px-2 rounded">
                {view.label.toLowerCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      {!allImagesUploaded && (
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`mt--1 flex items-center justify-center gap-2 ${
            isLoading ? "bg-gray-300" : "bg-orange-400 hover:ring-2 ring-amber-800 hover:bg-slate-300 hover:text-orange-700"
          } cursor-pointer text-white font-bold py-3 px-4 rounded-sm  transition-all duration-200`}
        >
          {isLoading ? (
            <>
              <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
      )}
    </div>
  );
}

export default CaptureImage;
