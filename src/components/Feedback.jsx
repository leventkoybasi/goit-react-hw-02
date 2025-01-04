function Feedback() {
  return (
    <>
      <div className='w-50 m0-auto mt-3 '>
        <table className='table' style={{ textAlign: "center" }}>
          <tbody>
            <tr>
              <td>Good :</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Nautral :</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Bad :</td>
              <td>1</td>
            </tr>

            <tr>
              <td colSpan={2} className='border-top border-2 border-dark px-2'></td>
            </tr>

            <tr>
              <td className='fw-bold'>TOTAL :</td>
              <td className='fw-bold'>5</td>
            </tr>
            <tr>
              <td className='fw-bold'>POSITIVE :</td>
              <td className='fw-bold'>80%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Feedback;
