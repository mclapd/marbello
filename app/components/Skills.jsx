"use client";

import { useInView } from "react-intersection-observer";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../effects/variants";
import { useEffect, useState } from "react";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [tileSupplySelection, setTileSupplySelection] = useState(0);
  const [designConsultation, setDesignConsultation] = useState(0);
  const [professionalInstallation, setProfessionalInstallation] = useState(0);
  const [commercialResidentialProjects, setCommercialResidentialProjects] =
    useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (tileSupplySelection < 95) {
          setTileSupplySelection(tileSupplySelection + 1);
        }
        if (designConsultation < 80) {
          setDesignConsultation(designConsultation + 1);
        }
        if (professionalInstallation < 98) {
          setProfessionalInstallation(professionalInstallation + 1);
        }
        if (commercialResidentialProjects < 97) {
          setCommercialResidentialProjects(commercialResidentialProjects + 1);
        }
      }, 50);
    } else {
      setTileSupplySelection(0);
      setDesignConsultation(0);
      setProfessionalInstallation(0);
      setCommercialResidentialProjects(0);
    }
  }, [
    inView,
    tileSupplySelection,
    designConsultation,
    professionalInstallation,
    commercialResidentialProjects,
  ]);

  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#eeeeee",
    },
    text: {
      fill: "#111111",
      fontsize: "24px",
    },
  };

  return (
    <motion.section
      ref={ref}
      className="section font-primary"
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-12">
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={tileSupplySelection}
              styles={styles}
              text={`${tileSupplySelection}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Tile Supply & Selection
            </div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={designConsultation}
              styles={styles}
              text={`${designConsultation}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Design Consultation
            </div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={professionalInstallation}
              styles={styles}
              text={`${professionalInstallation}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Professional Installation
            </div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={commercialResidentialProjects}
              styles={styles}
              text={`${commercialResidentialProjects}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Commercial & Residential Projects
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
