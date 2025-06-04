const Button = ({children, bgColor}) => {
    return (
        <button type="button" className={`md:btn rounded md:text-white text-white text-xs sm:text-base font-normal flex items-center ${bgColor} pointer-events-auto`}>{children}</button>
    );
};

export default Button;