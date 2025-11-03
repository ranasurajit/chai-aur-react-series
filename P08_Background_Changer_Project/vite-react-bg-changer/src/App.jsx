import { useState } from 'react';

const App = () => {
  const colorList = [
    { color: 'red', text: 'white', label: 'Red' },
    { color: 'green', text: 'white', label: 'Green' },
    { color: 'blue', text: 'white', label: 'Blue' },
    { color: 'olive', text: 'white', label: 'Olive' },
    { color: 'grey', text: 'white', label: 'Grey' },
    { color: 'yellow', text: 'black', label: 'Yellow' },
    { color: 'pink', text: 'black', label: 'Pink' },
    { color: 'purple', text: 'white', label: 'Purple' },
    { color: 'lavender', text: 'black', label: 'Lavender' },
    { color: 'white', text: 'black', label: 'White' },
    { color: 'black', text: 'white', label: 'Black' }
  ];
  const [color, setColor] = useState('white');

  const getTextColor = (color) => {
    return colorList.filter((colorItem) => colorItem?.color == color)?.[0].text || 'white';
  };

  return (
    <div className='flex items-center justify-center h-screen' style={{ backgroundColor: color }}>
      <h2 className='text-2xl' style={{ color: getTextColor(color) }}>Toggle the Colored Button to change the Background Color</h2>
      <div className='fixed bottom-0 px-5 bg-teal-200 w-full'>
        <div className='flex justify-center'>
          {
            colorList.map((colorItem) => {
              return (
                <button key={colorItem?.color} className='m-3 p-3 w-md rounded-2xl text-white text-xl outline-none'
                  style={{ backgroundColor: colorItem?.color, color: colorItem?.text }}
                  onClick={() => setColor(colorItem?.color)}>
                  {colorItem?.label}
                </button>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default App;
