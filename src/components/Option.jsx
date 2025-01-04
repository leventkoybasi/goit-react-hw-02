function Option() {
  return (
    <>
      <div className='mt-4'>
        <button
          id='good'
          className='btn btn-outline-secondar px-3 py-2 m-2'
          style={{ border: "2px solid black" }}
        >
          Good
        </button>
        <button
          id='neutral'
          className='btn btn-outline-secondar px-3 py-2 m-2'
          style={{ border: "2px solid black" }}
        >
          Neutral
        </button>
        <button
          id='bad'
          className='btn btn-outline-secondar px-3 py-2 m-2'
          style={{ border: "2px solid black" }}
        >
          Bad
        </button>
        <button
          id='reset'
          className='btn btn-outline-secondar px-3 py-2 m-2'
          style={{ border: "2px solid black" }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Option;
