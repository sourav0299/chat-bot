import React from "react";
import styled from "styled-components";

interface SwitchProps {
  onChange: () => void;
  checked: boolean;
}

const Switch: React.FC<SwitchProps> = ({onChange, checked}) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span className="slider">
          <span className="circle">
            <span className="shine shine-1" />
            <span className="shine shine-2" />
            <span className="shine shine-3" />
            <span className="shine shine-4" />
            <span className="shine shine-5" />
            <span className="shine shine-6" />
            <span className="shine shine-7" />
            <span className="shine shine-8" />
            <span className="moon" />
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  transition: 0.4s;
  border-radius: 30px;
  overflow: hidden;
}

.circle {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: #fff000;
  transition: 0.4s;
}

.switch input:checked + .slider .circle {
  transform: rotate(0deg) translateX(1.5em) !important;
}

.switch input:checked + .slider .circle .shine {
  transform: translate(0%, 0%) !important;
}

.switch input:checked + .slider .circle .moon {
  left: -10%;
  opacity: 1;
  transform: translateY(-60%);
}

.moon {
  position: absolute;
  left: -100%;
  top: 50%;
  opacity: 0;
  background-color: #333;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 99999px;
  transform: translateY(-50%);
  transition: all 0.4s;
}

.shine {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #fff000;
  border-radius: 1rem;
  transition: all 0.4s;
}

.shine-1 {
  transform: translate(-50%, -375%);
}
.shine-2 {
  transform: translate(175%, -275%);
}
.shine-3 {
  transform: translate(275%, -50%);
}
.shine-4 {
  transform: translate(175%, 175%);
}
.shine-5 {
  transform: translate(-50%, 275%);
}
.shine-6 {
  transform: translate(-275%, 175%);
}
.shine-7 {
  transform: translate(-375%, -50%);
}
.shine-8 {
  transform: translate(-275%, -275%);
}

`;

export default Switch;
