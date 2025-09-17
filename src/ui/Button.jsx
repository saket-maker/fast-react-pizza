import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block cursor-pointer text-sm rounded-full bg-yellow-400  font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm cursor-pointer rounded-full  font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-200 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800 border border-stone-300 focus:text-stone-800 ',
    round: base + 'w-10 h-10 p-0 rounded-full',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
