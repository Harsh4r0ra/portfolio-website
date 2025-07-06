import React from 'react';
import { History as HistoryInterface } from './interface';
import { Ps1 } from '../Ps1';

export const History: React.FC<{ history: Array<HistoryInterface> }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index} className="mb-4">
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
            <div className="flex-shrink-0">
              <Ps1 />
            </div>

            <div className="flex-grow break-all">{entry.command}</div>
          </div>

          <div
            className="whitespace-pre-wrap mt-2 text-sm sm:text-base"
            style={{ lineHeight: '1.6' }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History;
