# Developer Guide

## Bug Fixes and Feature Enhancements

### First Bug: Modify Overflow Style

1. **Open `BookingsTable.js`**:

   - Locate the `div` element with overflow-related styles.

2. **Modify Overflow Style Value**:
   - Change the `overflow` style property to address the bug. (https://tailwindcss.com/docs/overflow)

### New Feature: Add Seasonal Booking Data and Chart Component

1. **Open `App.js`**:

   - Add state variables for `seasonalBooking` and `seasonalCheckin` using `useState`.

   ```javascript
   const [seasonalBooking, setSeasonalBooking] = useState([]);
   const [seasonalCheckin, setSeasonalCheckin] = useState([]);
   ```

2. **Fetch Data via API:**:
   - Implement an API call to fetch data for seasonalBooking and seasonalCheckin.
   - Update the state with the retrieved values.


3. **Add ComboChart component:**:
   - Include the ComboChart component in App.js.
   - Pass the data stored in the state variables to the ComboChart.
   - Configure the ComboChart to display the provided data.
