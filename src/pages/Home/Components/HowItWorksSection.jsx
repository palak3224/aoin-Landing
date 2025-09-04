import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Step1Img from "@/assets/step1.png";
import Step2Img from "@/assets/step2.png";
import Step3Img from "@/assets/step3.png";

const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoPlayInterval = 3000;

  const steps = [
    {
      number: "1",
      title: "Create Your Account",
      content: "Sign up quickly with your brand or shop details.",
      image: Step1Img
    },
    {
      number: "2", 
      title: "Upload Your Products",
      content: "List items individually or bulk-upload your catalog.",
      image: Step2Img
    },
    {
      number: "3",
      title: "Start Selling Globally", 
      content: "We drive traffic, provide tools, and help your products reach buyers worldwide.",
      image: Step3Img
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, steps.length, autoPlayInterval]);

  const handleStepClick = (index) => {
    setCurrentStep(index);
    setProgress(0);
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-br from-orange-50 to-amber-50 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-start gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  index === currentStep
                    ? 'bg-white shadow-xl border-2 border-orange-200'
                    : 'bg-white/50 hover:bg-white/80 border-2 border-transparent'
                }`}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: index === currentStep ? 1 : 0.6 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleStepClick(index)}
              >
                {/* Step Number Circle */}
                <motion.div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 ${
                    index === currentStep
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                      : 'bg-orange-100 text-orange-600'
                  }`}
                  animate={{ scale: index === currentStep ? 1.1 : 1 }}
                >
                  {step.number}
                </motion.div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-semibold mb-3 transition-colors duration-500 ${
                    index === currentStep ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-base md:text-lg transition-colors duration-500 ${
                    index === currentStep ? 'text-gray-700' : 'text-gray-600'
                  }`}>
                    {step.content}
                  </p>
                  
                  {/* Progress Bar */}
                  {index === currentStep && (
                    <div className="mt-4">
                      <div className="w-full h-1 bg-orange-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                          style={{ width: `${progress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <div className="pt-8">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                Start Free Onboarding Today
              </motion.button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {steps.map(
                (step, index) =>
                  index === currentStep && (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Image Overlay with Step Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="text-white">
                <h4 className="text-xl font-semibold mb-2">
                  {steps[currentStep].title}
                </h4>
                <p className="text-orange-200">
                  Step {steps[currentStep].number} of {steps.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;