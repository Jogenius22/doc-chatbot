import React, { useCallback } from 'react';

interface QAPromptProps {
  qaPrompt: string;
  setQAPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const QAPrompt: React.FC<QAPromptProps> = ({ qaPrompt, setQAPrompt }) => {
  const handleQAPromptChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQAPrompt(event.target.value);
    },
    [setQAPrompt],
  );

  return (
    <div>
      <label className="block font-medium leading-6 text-xs sm:text-sm text-blue-400">
        QA Prompt
      </label>
      <div className="mt-2">
        <input
          type="text"
          value={qaPrompt}
          onChange={handleQAPromptChange}
          name="qaprompt"
          id="qaprompt"
          className="block w-full rounded-md bg-gray-800 text-gray-300 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="test here for now"
        />
      </div>
    </div>
  );
};

export default QAPrompt;
