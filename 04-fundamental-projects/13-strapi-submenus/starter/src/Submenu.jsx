import { useGlobalContext } from './Context';
import sublinks from './data';
import { useRef } from 'react';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const subMenuContainer = useRef(null);

  const handleMouseLeave = (e) => {
    const submenu = subMenuContainer.current;
    const result = submenu.getBoundingClientRect();

    const { clientX, clientY } = e;
    const { left, right, bottom } = result;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={subMenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div className='submenu-links'>
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
