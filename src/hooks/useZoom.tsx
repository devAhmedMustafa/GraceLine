import { useRef, useEffect, useState } from "react";

const useSmoothZoom = (canvasRef : any,initialScale = 1, zoomSpeed = 0.4) => {
  const [scale, setScale] = useState(initialScale);
  const [targetScale, setTargetScale] = useState(initialScale);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;

    const handleScroll = (event: any) => {
    //   event.preventDefault();

      const scaleFactor = 1.2;
      setTargetScale((prevTargetScale) => {
        if (event.deltaY < 0) {
          return prevTargetScale * scaleFactor;
        } else {
          return prevTargetScale / scaleFactor;
        }
      });
    };

    const handleMouseDown = (event: any) => {
        // Check for right mouse click
        if (event.button !== 2) {
            return;
        }
        setIsDragging(true);
        dragStart.current = {
            x: event.clientX - translate.x,
            y: event.clientY - translate.y,
        };
    };

    const handleMouseMove = (event: any) => {

        if (isDragging) {
            setTranslate({
            x: event.clientX - dragStart.current.x,
            y: event.clientY - dragStart.current.y,
            });
        }
    };

    const handleMouseUp = (event: any) => {
        if (event.button !== 2) return;
        
        setIsDragging(false);
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [translate, isDragging]);

  useEffect(() => {
    let animationFrameId: any;

    const smoothZoomAndPan = () => {
      setScale((prevScale) => {
        const difference = targetScale - prevScale;
        if (Math.abs(difference) < 0.001) return targetScale;
        return prevScale + difference * zoomSpeed;
      });

      animationFrameId = requestAnimationFrame(smoothZoomAndPan);
    };

    smoothZoomAndPan();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetScale, zoomSpeed]);

  return { canvasRef, scale, translate };
};

export default useSmoothZoom;
