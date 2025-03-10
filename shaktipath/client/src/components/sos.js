import React from "react";
import { toast } from "react-hot-toast";
import { useSwipeable } from "react-swipeable";

const useSOS = () => {
  const [showSOS, setShowSOS] = React.useState(false);
  const [secondsRemaining, setSecondsRemaining] = React.useState(5);
  const toastId = "sos-toast";
  let intervalId;

  const handleSOS = () => {
    setShowSOS(true);
  };

  const cancelSOS = () => {
    toast.dismiss(toastId);
    toast.error("SOS cancelled❌", { id: toastId });
    setShowSOS(false);
    setSecondsRemaining(5);
  };

  const callSOS = () => {
    toast.success("SOS called🚨");
    setShowSOS(false);
    setSecondsRemaining(5);
  };

  const handleSwipe = (eventData) => {
    if (eventData.dir === "Right") {
      cancelSOS();
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    const swipeStartX = event.clientX;
    const swipeStartY = event.clientY;

    const handleMouseMove = (event) => {
      const swipeDistanceX = event.clientX - swipeStartX;
      const swipeDistanceY = event.clientY - swipeStartY;

      if (Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY) && swipeDistanceX > 50) {
        handleSwipe({ dir: "Right" });
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  React.useEffect(() => {
    if (showSOS) {
      intervalId = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
        if (secondsRemaining === 0 && showSOS) {
          callSOS();
        }
      };
    }
  }, [showSOS, secondsRemaining]);

  return {
    showSOS,
    secondsRemaining,
    handleSOS,
    handleSwipe,
    handleMouseDown,
  };
};

const Sos = () => {
  const { showSOS, secondsRemaining, handleSOS, handleSwipe, handleMouseDown } = useSOS();

  const swipeHandlers = useSwipeable({
    onSwiped: handleSwipe,
  });

  return (
    <main className="text-white">
      <button
        onClick={handleSOS}
        className="fixed z-50 right-4 bottom-4 w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full p-4 m-2 shadow-md shadow-red-500/50"
      >
        <p className="font-semibold">SOS</p>
      </button>

      {showSOS && (
        <div className="absolute h-full w-full backdrop-filter backdrop-blur backdrop-brightness-50 z-50">
          <div className="flex justify-center items-center h-full w-full flex-col">
            <div className="w-32 h-32 bg-red-500 hover:bg-red-600 rounded-full p-4 m-2 flex justify-center items-center">
              <p className="font-semibold text-5xl">SOS</p>
            </div>
            <div>
              <p>Slide to cancel in {secondsRemaining} seconds</p>
            </div>

            <div
              className="bg-red-500 mt-3 p-3 w-4/5 text-center hover:bg-red-600 rounded-full font-semibold transition-transform"
              {...swipeHandlers}
              onMouseDown={handleMouseDown}
            >
              <button>Swipe here Cancel</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Sos;
