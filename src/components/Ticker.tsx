import React from "react";

const TickerItem = ({ label, value }: { label: string; value: string }) => (
  <div className="inline-flex items-center gap-2 mx-8">
    <span className="text-gray-500">{label}:</span>
    <span className="text-accent">{value}</span>
  </div>
);

export default function Ticker() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-black text-white h-10 border-t-2 border-accent flex items-center overflow-hidden whitespace-nowrap font-mono text-xs uppercase tracking-wider">
      <div className="animate-ticker inline-block">
        <TickerItem label="ROASTER_TEMP" value="204°C" />
        <TickerItem label="BATCH_ID" value="#8842-A" />
        <TickerItem label="HUMIDITY" value="42%" />
        <TickerItem label="ORIGIN_QUEUE" value="ETH-YIRG" />
        <TickerItem label="STATUS" value="CRACK_01_DETECTED" />
        <TickerItem label="RPM" value="52" />
        <TickerItem label="ROASTER_TEMP" value="204°C" />
        <TickerItem label="BATCH_ID" value="#8842-A" />
        <TickerItem label="HUMIDITY" value="42%" />
        <TickerItem label="ORIGIN_QUEUE" value="ETH-YIRG" />
        <TickerItem label="STATUS" value="CRACK_01_DETECTED" />
        <TickerItem label="RPM" value="52" />
        <TickerItem label="ROASTER_TEMP" value="204°C" />
        <TickerItem label="BATCH_ID" value="#8842-A" />
        <TickerItem label="HUMIDITY" value="42%" />
        <TickerItem label="ORIGIN_QUEUE" value="ETH-YIRG" />
        <TickerItem label="STATUS" value="CRACK_01_DETECTED" />
        <TickerItem label="RPM" value="52" />
      </div>
    </div>
  );
}
