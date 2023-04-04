import {useRef, useEffect, MutableRefObject} from 'react';

export function useHorizontalScroll() : MutableRefObject<HTMLDivElement | null> {
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = scrollRef.current;
        if(el){
            const onWheel = (e:WheelEvent) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth"
                });
            };
            el.addEventListener('wheel', onWheel);
            return () => el.removeEventListener('wheel', onWheel);
        }
    }, [])
    return scrollRef;

}
