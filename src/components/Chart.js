import '@refinitiv-ui/elements/chart';
import { useEffect, useLayoutEffect, useRef } from 'react';

function Chart({ config, className }) {
  const chartRef = useRef();

  useLayoutEffect(() => {
    if (chartRef.current) {
      chartRef.current.config = config;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { current } = chartRef;
    if (current) {
      current.config.data = config.data;
      if (chartRef.current.chart) {
        current.updateChart();
      }
    }
  }, [config.data]);

  return <ef-chart ref={chartRef} class={className}></ef-chart>;
}

export default Chart;
