import { useEffect,useState } from "react";

const Boop = ({ rotation = 0, timing = 150, children,type }) => {
    const effects={turn:[`rotate(${rotation}deg)`,`rotate(0deg)`],
                   goleft:['translateX(-12px)','translateX(0px)'],
                  goRight:['translateX(12px)','translateX(0px)'],
                none:[''],
              godown :[]}
    const [isBooped, setIsBooped] =useState(false);
    const style = {
      display: 'inline-block',
      backfaceVisibility: 'hidden',
      transform: isBooped
        ? effects[type][0]
        : effects[type][1],
      transition: `transform ${timing}ms`,
      config: {
        tension: 300,
        friction: 10,
      },
    };
    useEffect(() => {
      if (!isBooped) {
        return;
      }
      const timeoutId = window.setTimeout(() => {
        setIsBooped(false);
      }, timing);
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [isBooped, timing]);
    const trigger = () => {
      setIsBooped(true);
    };
    const a= {
      onMouseEnter : trigger
    }

    return (
      <span {...a} style={style}>
        {children}
      </span>
    );
  };

  export default Boop