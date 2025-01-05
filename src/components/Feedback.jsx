/* eslint-disable react/prop-types */
function Feedback({ score, totalFeedback, positiveFeedback }) {
  console.log(score);
  return (
    <>
      <div className='w-50 m0-auto mt-3 '>
        {totalFeedback > 0 ? (
          <table className='table' style={{ textAlign: "center" }}>
            <tbody>
              <tr>
                <td>Good :</td>
                <td>{score.good}</td>
              </tr>
              <tr>
                <td>Nautral :</td>
                <td>{score.neutral}</td>
              </tr>
              <tr>
                <td>Bad :</td>
                <td>{score.bad}</td>
              </tr>

              <tr>
                <td colSpan={2} className='border-top border-2 border-dark px-2'></td>
              </tr>

              <tr>
                <td className='fw-bold'>TOTAL:</td>
                <td className='fw-bold'>{totalFeedback}</td>
              </tr>
              <tr>
                <td className='fw-bold'>POSITIVE:</td>
                <td className='fw-bold'>{positiveFeedback}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h4 className='mt-3'>No Feedback yet...</h4>
        )}
      </div>
    </>
  );
}

export default Feedback;
