function VisualizationMobile({ scale, image }) {
  return (
    <div className="flex justify-center items-center" style={{ width: `${scale}%` }}>
      <div className="mockup-phone rounded-[3rem] border-gray-500 max-w-xs sm:max-w-sm">
        <div className="mockup-phone-display rounded-[3rem]">
          <img src={image} alt="Mobile Preview" />
        </div>
      </div>
    </div>
  );
}

export default VisualizationMobile;
