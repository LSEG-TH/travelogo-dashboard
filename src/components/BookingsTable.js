import Flag from './Flag';
import Icon from './Icon';
import Pill from './Pill';

export const BookingsTable = ({ bookings }) => {
  const getStatusColor = (status) => {
    return status === 'confirmed' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className='flex flex-col'>
      <div className='w-full inline-block align-middle'>
        <div className='overflow-x-auto border'>
          <table className='min-w-full divide-y divide-gray-200 '>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Booking ID
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Guest Info
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Room Type (Days)
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Visit, Purpose
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase'
                >
                  <div className='flex items-center'>
                    Check-in
                    <Icon icon='forward' />
                    Check-out
                  </div>
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase '
                >
                  Status
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase '
                >
                  Payment
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Comment
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {bookings.map(
                ({
                  booking_id,
                  origin_country,
                  num_guests,
                  visit_type,
                  visit_purpose,
                  visit_length_day,
                  room_type,
                  check_in_date,
                  check_out_date,
                  currency,
                  amount,
                  status,
                  guest_name,
                  score,
                  comment,
                }) => (
                  <tr key={booking_id}>
                    <td className='px-6 py-4 text-sm font-medium whitespace-nowrap'>
                      #{booking_id}
                    </td>
                    <td className='px-6 py-4 text-sm font-medium whitespace-nowrap capitalize text-gray-100'>
                      <h3>{guest_name}</h3>
                      <div className='flex gap-2'>
                        <Flag className='mr-2' flag={origin_country.toLowerCase()}></Flag>
                        <strong>{num_guests}</strong>
                        <span className='font-light'>PAX</span>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm font-medium whitespace-nowrap capitalize '>
                      {room_type}{' '}
                      <span className='font-light'>
                        {visit_length_day} {visit_length_day > 1 ? 'Days' : 'Day'}
                      </span>
                    </td>
                    <td className='px-6 py-4 text-sm whitespace-nowrap capitalize'>
                      {visit_type}, {visit_purpose}
                    </td>
                    <td className='px-6 py-4 text-sm text-center whitespace-nowrap'>
                      <div className='flex items-center '>
                        <Pill>{check_in_date}</Pill>
                        <Icon icon='forward' />
                        <Pill>{check_out_date}</Pill>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm text-center whitespace-nowrap'>
                      <span className={`capitalize ${getStatusColor(status)}`}>{status}</span>
                    </td>
                    <td className='px-6 py-4 text-sm text-right whitespace-nowrap'>
                      <span className={`capitalize ${getStatusColor(status)}`}>
                        {amount} {currency}
                      </span>
                    </td>
                    <td className='py-2'>
                      <ef-rating value={score / 2}></ef-rating>
                      <p>{comment}</p>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingsTable;
