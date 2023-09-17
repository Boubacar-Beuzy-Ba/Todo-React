import IconMoon from "../assets/icon-moon.svg";

function HeaderComponent() {
  return (
    <>
      <div className="flex justify-between mx-4 sm:mx-auto -mt-40 md:-mt-64 content-center items-center">
        <h2 className="text-3xl uppercase tracking-wide font-semibold text-white">
          Todo
        </h2>
        <img src={IconMoon} alt="IconMoon" className="h-fit" />
      </div>
    </>
  );
}

export default HeaderComponent;
