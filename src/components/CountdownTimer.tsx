
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-07T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Conference Countdown</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 min-w-[120px]">
            <div className="text-3xl font-bold text-blue-900">{timeLeft.days}</div>
            <div className="text-gray-600">Days</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 min-w-[120px]">
            <div className="text-3xl font-bold text-blue-900">{timeLeft.hours}</div>
            <div className="text-gray-600">Hours</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 min-w-[120px]">
            <div className="text-3xl font-bold text-blue-900">{timeLeft.minutes}</div>
            <div className="text-gray-600">Minutes</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 min-w-[120px]">
            <div className="text-3xl font-bold text-blue-900">{timeLeft.seconds}</div>
            <div className="text-gray-600">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
