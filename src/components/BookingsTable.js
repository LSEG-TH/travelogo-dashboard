import { useEffect, useState } from 'react';
import { getHost } from '../services/hostService';
import axios from 'axios';

import Flag from './Flag';

export const BookingsTable = (props) => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get(`${getHost()}/api/v1/booking`, {}).then((response) => {
      const data = response.data.bookings;
      setBookings(data);
    });
  }, []);

  const getStatusColor = (status) => {
    return status === 'confirmed' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto'>
        <div className='w-full inline-block align-middle'>
          <div className='overflow-hidden border'>
            <table className='min-w-full divide-y divide-gray-200'>
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
                    Guest(s)
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                  >
                    Visit, Purpose
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                  >
                    Room Type (Days)
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase '
                  >
                    Check-in
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase '
                  >
                    Check-out
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase '
                  >
                    Status
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
                    status,
                  }) => (
                    <tr key={booking_id}>
                      <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
                        #{booking_id}
                      </td>
                      <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap capitalize'>
                        <div className='flex gap-2'>
                          <Flag className='mr-2' flag={origin_country.toLowerCase()}></Flag>
                          <strong>{num_guests}</strong>
                          <span className='font-light'>PAX</span>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap capitalize'>
                        {visit_type}, {visit_purpose}
                      </td>
                      <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap capitalize'>
                        {room_type}{' '}
                        <span className='font-light'>
                          {visit_length_day} {visit_length_day > 1 ? 'Days' : 'Day'}
                        </span>
                      </td>
                      <td className='px-6 py-4 text-sm text-center whitespace-nowrap'>
                        {check_in_date}
                      </td>
                      <td className='px-6 py-4 text-sm text-center whitespace-nowrap'>
                        {check_out_date}
                      </td>
                      <td className='px-6 py-4 text-sm font-medium text-center whitespace-nowrap'>
                        <span className={`capitalize ${getStatusColor(status)}`}>{status}</span>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsTable;
