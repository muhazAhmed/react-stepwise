import { useState } from "react";
import StepperDemo from "../components/docs/StepperDemo";
import { motion } from "framer-motion";
import { Clipboard, SquareTerminal } from "lucide-react";

function Usage() {
  const [currentStep, setCurrentStep] = useState(0);

  const stepData = [
    {
      label: "Personal Info",
      status: currentStep > 0 ? "completed" : "current",
    },
    {
      label: "Address Info",
      status:
        currentStep === 1
          ? "current"
          : currentStep > 1
          ? "completed"
          : "pending",
    },
    { label: "Review", status: currentStep === 2 ? "current" : "pending" },
  ];

  const codeItems = [
    { label: "npm", code: "npm install react-stepwise" },
    { label: "yarn", code: "yarn add react-stepwise" },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full min-h-screen p-4 md:p-8 bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200 flex flex-col items-center gap-16">
      {/* Page Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        React Stepwise Playground - Documentation
      </motion.h1>

      {/* Installation Section */}
      <motion.section
        className="w-full max-w-5xl flex flex-col items-center gap-6"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h2
          variants={sectionVariants}
          className="text-2xl font-semibold text-gray-700"
        >
          Installation
        </motion.h2>
        <motion.p
          variants={sectionVariants}
          className="text-gray-600 text-center max-w-xl"
        >
          Quickly install React Stepwise using your preferred package manager.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {codeItems.map((item) => (
            <motion.div
              key={item.label}
              className="bg-gray-900 p-4 rounded-xl flex flex-col gap-3 w-72 md:w-96 shadow-lg backdrop-blur-md border border-white/20"
              variants={sectionVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between text-gray-300 font-mono">
                <div className="flex items-center gap-2">
                  <SquareTerminal size={16} className="text-gray-400" />
                  {item.label}
                </div>
                <Clipboard
                  size={16}
                  className="text-gray-400 cursor-pointer"
                  onClick={() => handleCopy(item.code)}
                />
              </div>
              <code className="pl-2 text-green-400 font-mono">{item.code}</code>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Variants Section */}
      <motion.section
        className="w-full max-w-6xl flex flex-col items-center gap-6"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h2
          variants={sectionVariants}
          className="text-2xl font-semibold text-gray-700"
        >
          Variants
        </motion.h2>
        <motion.p
          variants={sectionVariants}
          className="text-gray-600 text-center max-w-xl"
        >
          Explore the different stepper variants to see their appearance and
          behavior.
        </motion.p>

        <motion.div
          className="flex gap-10 flex-wrap justify-evenly w-full"
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
        >
          {[
            {
              title: "Count Variant",
              desc: "Default numeric stepper",
              props: { steps: 3, type: "count", size: "sm", animate: true },
            },
            {
              title: "Check Variant",
              desc: "Check icons with custom colors",
              props: {
                steps: 3,
                type: "check",
                bgColor: "bg-blue-600",
                color: "text-white",
                size: "md",
                connectorClassName: "rounded-full",
                animate: true,
              },
            },
            {
              title: "Custom Icon",
              desc: "Check variant with 🔥 icon",
              props: {
                steps: 3,
                type: "check",
                bgColor: "bg-green-600",
                color: "text-white",
                icon: (i: number) => <span>🔥</span>,
                size: "lg",
                connectorClassName: "h-1 rounded",
                animate: true,
              },
            },
            {
              title: "Silent Variant",
              desc: "Stepper with no numbers/icons",
              props: { steps: 3, type: "silent", size: "md", animate: true },
            },
            {
              title: "Step Data Variant",
              desc: "Stepper with labels and custom status",
              props: {
                stepData,
                type: "check",
                bgColor: "bg-purple-600",
                color: "text-white",
                size: "md",
                connectorClassName: "h-1 rounded",
                currentStep,
                setCurrentStep,
              },
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={sectionVariants}
              className="w-full max-w-md"
            >
              <StepperDemo
                title={item.title}
                description={item.desc}
                {...item.props}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Usage;
