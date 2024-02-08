import React, { useCallback, useState } from 'react';

export default function SearchInput() {
  const [searchPhrase, setSearchPhrase] = useState<string>('');

  const debounce = (() => {
    console.log('debounce', searchPhrase);
    let taskInQue: any;

    return (callback: Function, delayTime: number) => {
      console.log('task', taskInQue, typeof taskInQue);
      if (taskInQue) {
        clearTimeout(taskInQue);
      }

      taskInQue = setTimeout(() => {
        callback();
      }, delayTime);
    }
  })();

  const submitInputValue = useCallback(() => {
    console.log('submit!');
  }, [searchPhrase]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchPhrase(value);
    debounce(submitInputValue, 3000);
  } 

  return (
    <div>
      <input onChange={handleChange}/>
      Result: {searchPhrase}
    </div>
  )
};
