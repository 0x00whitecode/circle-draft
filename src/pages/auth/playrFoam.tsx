import { useState } from "react";
import { useNavigate } from "react-router-dom";
import half_man from "../../assets/img/guig-removebg-preview 1.png";
import spin_ball from "../../assets/img/bin-6550_256.gif";
import logo from "../../assets/img/CircleDraft.png";
import field from "../../assets/img/feild.png";
import jersy from "../../assets/img/jersey.png";
import jersy_display from "../../assets/img/shet.png";
import wing_span from "../../assets/img/wing.png";
import CustomInput from "../../component/CustomInput";
import CaptureImage from "../../component/captureImage";


const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);

const ProgressStep = ({ step, current }) => (
  <div
    className={`w-10 h-10 rounded-full ${
      step >= current ? "bg-[#81A2FF]" : "bg-[#f4f5f6]"
    } flex items-center justify-center font-bold text-sm ${
      step >= current ? "text-white" : "text-slate-700"
    }`}
  >
    {current}
  </div>
);

export default function CircleDraftForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
  fullName: "",
  dobDay: "",
  dobMonth: "",
  dobYear: "",
  nationality: "",
  email: "",
  height: "",
  weight: "",
  dominantHand: "",
  wingspan: "",
  verticalJump: "",
  bodyFat: "",
  medicalConditions: "",
  walletAddress: localStorage.getItem("walletAddress") || "",
  jersey: "",
  position:"",
  experience: "", 
  school:""
});


  const [error, setError] = useState("");

  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(""), 3000);
  };

const handlePreviousStep = () => {
  setStep((prev) => Math.max(prev - 1, 1));
};


  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleNextStep1 = () => {
    const { fullName, dobDay, dobMonth, dobYear, nationality, email } = formData;

    if (!fullName || !dobDay || !dobMonth || !dobYear || !nationality || !email) {
      return showError("Please fill in all the fields in this step.");
    }

    const formattedDOB = `${dobYear}-${dobMonth.padStart(2, "0")}-${dobDay.padStart(2, "0")}`;

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("dob", formattedDOB);
    localStorage.setItem("nationality", nationality);
    localStorage.setItem("email", email);
    setStep(2);
  };

const handleNextStep2 = () => {
  const { height, weight, dominantHand } = formData;

  console.log("Step 2 Data:", formData); 
  if (!height || !weight || !dominantHand) {
    return showError("Please fill in all the fields in this step.");
  }

  localStorage.setItem("height", height);
  localStorage.setItem("weight", weight);
  localStorage.setItem("dominantHand", dominantHand);

  setStep(3);
};



 const handleNextStep3 = () => {
    const { jersey, position, experience, school } = formData;

    if (!jersey || !position || !experience || !school) {
      return showError("Please fill in all the fields in this final step.");
    }

    localStorage.setItem("jersey", jersey);
    localStorage.setItem("position", position);
    localStorage.setItem("experience", experience);
    localStorage.setItem("school", school);

    setStep(4);
  };

  const handleNextStep4 = () => {
  const { wingspan, verticalJump, bodyFat, medicalConditions } = formData;

  console.log("Step 2 Data:", formData); 
  if (!wingspan || !verticalJump || !bodyFat || medicalConditions === "") {
    return showError("Please fill in all the fields in this step.");
  }

  localStorage.setItem("wingspan", wingspan);
  localStorage.setItem("verticalJump", verticalJump);
  localStorage.setItem("bodyFat", bodyFat);
  localStorage.setItem("medicalConditions", medicalConditions);

  setStep(5);
};


  return (
    <div className="flex flex-col items-center justify-center max:h-[100vh]  overflow-hidden w-full">
      <img src={logo} alt="Basketball" className="mb-8" />

      <div className="p-8 w-full max-w-md">
        {/* Progress */}
        <div className="flex justify-center mb-6 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <ProgressStep key={i} step={step} current={i} />
          ))}
        </div>

        {/* Step 1 */}
        {step === 5 && (
          <>
            <Input label="Full Name" value={formData.fullName} onChange={handleInputChange("fullName")} />

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
              <div  className="flex gap-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <Select options={days} value={formData.dobDay} onChange={handleInputChange("dobDay")} placeholder="Day" />
                <Select options={months} value={formData.dobMonth} onChange={handleInputChange("dobMonth")} placeholder="Month" />
                <Select options={years} value={formData.dobYear} onChange={handleInputChange("dobYear")} placeholder="Year" />
              </div>
            </div>

            <Input label="Nationality" value={formData.nationality} onChange={handleInputChange("nationality")} />
            <Input label="Email Address" type="email" value={formData.email} onChange={handleInputChange("email")} />

            <div className="flex justify-center">
              <button onClick={handleNextStep1} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
             <img src={half_man} alt="Left" className="absolute left-0 bottom-0 h-72 object-contain" />
      <img src={spin_ball} alt="Ball" className="absolute right-0 bottom-0 h-72 object-contain" />
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <CustomInput
              label="Height (cm/inches)"
              id="height"
              placeholder="e.g., 175 cm or 69 inches"
              value={formData.height}
              onChange={handleInputChange("height")}
            />
            <CustomInput
              label="Weight (kg/lbs)"
              id="weight"
              placeholder="e.g., 70 kg or 154 lbs"
              value={formData.weight}
              onChange={handleInputChange("weight")}
            />
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 ">Dominant Hand</label>
              <select
                className="border rounded w-full py-2 px-3 appearance-none border-gray-700 text-gray-700"
                value={formData.dominantHand}
                onChange={handleInputChange("dominantHand")}
              >
                <option value="">Select</option>
                <option value="Left">Left</option>
                <option value="Right">Right</option>
              </select>
            </div>

            <div className="flex justify-between">
               <button onClick={handlePreviousStep} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4   rounded">
    Previous
  </button>
     <button onClick={handleNextStep2} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
            <img src={field} alt="Ball" className="absolute right-0 bottom-0 h-122 object-contain" />
          </>
        )}

{/* Step 3 */}
        {step === 3 && (
          <>
            <CustomInput
              label="Jersey Number"
              id="jersey"
              placeholder="e.g., 30"
              value={formData.jersey}
              onChange={handleInputChange("jersey")}
            />

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Position</label>
              <select
                className="border rounded w-full py-2 px-3 border-gray-700 text-gray-700"
                value={formData.position}
                onChange={handleInputChange("position")}
              >
                <option value="">Select</option>
                <option value="Point Guard">Point Guard</option>
                <option value="Power Forward">Power Forward</option>
                <option value="Shooting Guard">Shooting Guard</option>
                <option value="Small Forward">Small Forward</option>
                <option value="Center">Center</option>
              </select>
            </div>

            <CustomInput
              label="Years of Experience"
              id="experience"
              placeholder="e.g., 3"
              value={formData.experience}
              onChange={handleInputChange("experience")}
            />

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">College/High School</label>
              <select
                className="border rounded w-full py-2 px-3 border-gray-700 text-gray-700"
                value={formData.school}
                onChange={handleInputChange("school")}
              >
                <option value="">Select</option>
                <option value="College">College</option>
                <option value="High School">High School</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex justify-between">
             

               <button onClick={handlePreviousStep} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4   rounded">
    Previous
  </button>
   <button onClick={handleNextStep3} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
            <img src={jersy_display} alt="Left" className="absolute left-0 bottom-0 h-72 object-contain" />
             <img src={jersy} alt="Ball" className="absolute right-0 bottom-0 h-122 object-contain" />
          </>
        )}

          {step === 4 && (
          <>
  <CustomInput
    label="Wingspan (cm/inches)"
    id="wingspan"
    placeholder="e.g., 200 cm / 78.7 in"
    value={formData.wingspan}
    onChange={handleInputChange("wingspan")}
  />

  <CustomInput
    label="Vertical Jump (cm/inches)"
    id="verticalJump"
    placeholder="e.g., 90 cm / 35.4 in"
    value={formData.verticalJump}
    onChange={handleInputChange("verticalJump")}
  />

  <CustomInput
    label="Body Fat Percentage"
    id="bodyFat"
    placeholder="e.g., 12%"
    value={formData.bodyFat}
    onChange={handleInputChange("bodyFat")}
  />

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Medical Conditions (if any)</label>
    <textarea
      className="border rounded w-full py-2 px-3 border-gray-700 text-gray-700"
      placeholder="e.g., Asthma"
      value={formData.medicalConditions}
      onChange={handleInputChange("medicalConditions")}
    />
  </div>

  <div className="flex justify-between">
    <button
      onClick={handlePreviousStep}
      className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
    >
      Previous
    </button>
    <button
      onClick={handleNextStep4}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Next
    </button>
  </div>

 
  <img src={wing_span} alt="Ball" className="absolute right-0 bottom-0 h-70 object-contain" />
</>

        )}

        {step === 1 && (
          <div className="">
            <CaptureImage />
            </div>
        )}
        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-center mt-4 font-medium">{error}</div>
        )}
      </div>

      {/* Images */}
     
    </div>
  );
}

function Input({ label, value, onChange, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Select({ options, value, onChange, placeholder }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border rounded px-2 py-2 w-1/3"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
