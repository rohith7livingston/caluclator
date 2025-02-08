import './Rotate.css'
export default function Rotate() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative flex items-center justify-center text-2xl font-bold">
          <span className="absolute">Done</span>
          <div className="w-24 h-24 border-4 border-black rounded-full animate-spin-slow"></div>
        </div>
      </div>
    );
  }
  