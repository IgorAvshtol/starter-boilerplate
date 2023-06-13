import React, { useEffect, useState } from 'react';

const CoordinatesPanel = ({ rectangles }) => {
  return (
      <div className='coordinates-panel'>
        {rectangles.map((rectangle) => (
            <div key={rectangle.id} className='coordinate'>
              <span>{rectangle.shape} {rectangle.id}: </span>
              <span>X: {rectangle.x}, Y: {rectangle.y}</span>
            </div>
        ))}
      </div>
  );
};

const Home = () => {
  const [rectangles, setRectangles] = useState([]);
  useEffect(() => {
    const savedRectangles = localStorage.getItem('rectangles');
    if (savedRectangles) {
      setRectangles(JSON.parse(savedRectangles));
    }
  }, []);

  const saveRectanglesToLocalStorage = (updatedRectangles) => {
    localStorage.setItem('rectangles', JSON.stringify(updatedRectangles));
  };

  const handleMouseDown = (event, rectangle) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    const offsetX = clientX - rectangle.x;
    const offsetY = clientY - rectangle.y;

    let newX = rectangle.x;
    let newY = rectangle.y;

    const handleMouseMove = (event) => {
      event.preventDefault();
      const { clientX, clientY } = event;
      newX = clientX - offsetX;
      newY = clientY - offsetY;

      setRectangles((prevState) =>
          prevState.map((rect) =>
              rect.id === rectangle.id ? { ...rect, x: newX, y: newY } : rect
          )
      );
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      saveRectanglesToLocalStorage(
          rectangles.map((rect) =>
              rect.id === rectangle.id ? { ...rect, x: newX, y: newY } : rect
          )
      );
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleAddRectangle = () => {
    const newId = rectangles.length + 1;
    const newRectangle = { id: newId, shape: 'Стол', x: 0, y: 0 };
    setRectangles((prevState) => [...prevState, newRectangle]);
    saveRectanglesToLocalStorage([...rectangles, newRectangle]);
  };

  const handleAddCircle = () => {
    const newId = rectangles.length + 1;
    const newCircle = { id: newId, shape: 'Стул', x: 0, y: 0 };
    setRectangles((prevState) => [...prevState, newCircle]);
    saveRectanglesToLocalStorage([...rectangles, newCircle]);
  };

  const handleDeleteRectangle = (rectangleId) => {
    setRectangles((prevState) => prevState.filter((rect) => rect.id !== rectangleId));
    saveRectanglesToLocalStorage(rectangles.filter((rect) => rect.id !== rectangleId));
  };

  const exportCoordinatesToFile = () => {
    const coordinatesData = JSON.stringify(rectangles);
    const blob = new Blob([coordinatesData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'coordinates.json';
    link.click();
    URL.revokeObjectURL(url);
  };


  const handleExportCoordinates = () => {
    exportCoordinatesToFile();
  };

  return (
      <div className='app'>
        <div className='grid' onMouseDown={(e) => e.preventDefault()}>
          {rectangles.map((rectangle) => (
              <div
                  key={rectangle.id}
                  className='shape'
                  style={{ left: rectangle.x, top: rectangle.y }}
                  onMouseDown={(e) => handleMouseDown(e, rectangle)}
              >
                {rectangle.shape === 'Стол' && <img className='shape' src='/img/furniture/sofa.png' alt='стол'/>}
                {rectangle.shape === 'Стул' && <img className='shape' src='/img/furniture/stool-chair.png' alt='стул'/>}
                <button
                    className='deleteButton'
                    onClick={() => handleDeleteRectangle(rectangle.id)}
                >
                  Удалить
                </button>
              </div>
          ))}
        </div>
        <div>
          <button className='addButton' onClick={handleAddRectangle}>
            Добавить стул
          </button>
          <button className='addButton' onClick={handleAddCircle}>
            Добавить стол
          </button>
          <button className='addButton' onClick={handleExportCoordinates}>
            Экспорт координат
          </button>
        </div>
        <CoordinatesPanel rectangles={rectangles}/>
      </div>
  );
};

export default Home;
