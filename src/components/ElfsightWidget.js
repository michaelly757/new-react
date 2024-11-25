import React, { useEffect } from 'react';

const ElfsightWidget = () => {
  useEffect(() => {
    // Dynamically load the Elfsight widget script
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div className="elfsight-app-80f1e42d-ab5c-4acb-a214-5f49c7eaac1a" data-elfsight-app-lazy></div>
    </div>
  );
};

export default ElfsightWidget;
